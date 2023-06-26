const puppeteer = require("puppeteer");
const mongoose = require("mongoose");
const Twenty23 = require("../../models/mlbData");
require("dotenv").config();
require("../../config/database");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.foxsports.com/mlb/scores?date=2023-03-31", {
    waitUntil: "domcontentloaded",
  });

  const gameData = await page.evaluate(() => {
    const games = Array.from(document.querySelectorAll(".score-chip.final"));

    return games.map((game) => {
      const teams = Array.from(
        game.querySelectorAll(
          "div.score-team-row > div.score-team-name.team > span"
        )
      );
      const scores = Array.from(
        game.querySelectorAll(
          "div.score-team-row > div.score-team-score > span"
        )
      );
      return {
        awayTeam: teams.length > 0 ? teams[0].textContent.trim() : null,
        awayScore:
          scores.length > 0 ? parseInt(scores[0].textContent.trim()) : null,
        homeTeam: teams.length > 1 ? teams[1].textContent.trim() : null,
        homeScore:
          scores.length > 1 ? parseInt(scores[1].textContent.trim()) : null,
      };
    });
  });

  await browser.close();

  for (let game of gameData) {
    const homeTeamUpdate = await Twenty23.findOneAndUpdate(
      { "teams.teamName": game.homeTeam },
      {
        $push: {
          "teams.$.gameResults": {
            awayTeam: game.awayTeam,
            awayScore: game.awayScore,
            homeTeam: game.homeTeam,
            homeScore: game.homeScore,
          },
          "teams.$.homeRunsAgainst": game.awayScore,
          "teams.$.homeRunsFor": game.homeScore,
        },
      }
    );

    if (!homeTeamUpdate) {
      console.log(`No match found for home team: ${game.homeTeam}`);
    }

    const awayTeamUpdate = await Twenty23.findOneAndUpdate(
      { "teams.teamName": game.awayTeam },
      {
        $push: {
          "teams.$.gameResults": {
            awayTeam: game.awayTeam,
            awayScore: game.awayScore,
            homeTeam: game.homeTeam,
            homeScore: game.homeScore,
          },
          "teams.$.awayRunsAgainst": game.homeScore,
          "teams.$.awayRunsFor": game.awayScore,
        },
      }
    );

    if (!awayTeamUpdate) {
      console.log(`No match found for away team: ${game.awayTeam}`);
    }
  }

  try {
    const results = await Twenty23.aggregate([
      { $unwind: "$teams" },
      { $unwind: "$teams.awayRunsAgainst" },
      { $unwind: "$teams.awayRunsFor" },
      { $unwind: "$teams.homeRunsAgainst" },
      { $unwind: "$teams.homeRunsFor" },
      {
        $group: {
          _id: "$teams.teamName",
          avgAwayRunsAgainst: { $avg: "$teams.awayRunsAgainst" },
          avgAwayRunsFor: { $avg: "$teams.awayRunsFor" },
          avgHomeRunsAgainst: { $avg: "$teams.homeRunsAgainst" },
          avgHomeRunsFor: { $avg: "$teams.homeRunsFor" },
        },
      },
    ]);

    for (let result of results) {
      await Twenty23.findOneAndUpdate(
        { "teams.teamName": result._id },
        {
          $set: {
            "teams.$.avgAwayRunsAgainst": result.avgAwayRunsAgainst,
            "teams.$.avgAwayRunsFor": result.avgAwayRunsFor,
            "teams.$.avgHomeRunsAgainst": result.avgHomeRunsAgainst,
            "teams.$.avgHomeRunsFor": result.avgHomeRunsFor,
          },
        }
      );
    }

    const totalAverages = await Twenty23.aggregate([
      { $unwind: "$teams" },
      {
        $group: {
          _id: null,
          totalAvgAwayRunsAgainst: { $avg: "$teams.avgAwayRunsAgainst" },
          totalAvgAwayRunsFor: { $avg: "$teams.avgAwayRunsFor" },
          totalAvgHomeRunsAgainst: { $avg: "$teams.avgHomeRunsAgainst" },
          totalAvgHomeRunsFor: { $avg: "$teams.avgHomeRunsFor" },
        },
      },
    ]);

    await Twenty23.findOneAndUpdate(
      { year: 2023 },
      {
        $set: {
          avgAwayRunsAgainst: totalAverages[0].totalAvgAwayRunsAgainst,
          avgAwayRunsFor: totalAverages[0].totalAvgAwayRunsFor,
          avgHomeRunsAgainst: totalAverages[0].totalAvgHomeRunsAgainst,
          avgHomeRunsFor: totalAverages[0].totalAvgHomeRunsFor,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
})();
