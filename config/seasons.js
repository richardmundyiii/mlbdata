const mongoose = require("mongoose");
const Season = require("./models/mlbData");
require("dotenv").config();
require("../../config/database");

const season2023 = new Season({
  year: 2023,
  teams: [
    {
      teamName: "ANGELS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "ASTROS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "ATHLETICS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "BLUE JAYS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "BRAVES",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "BREWERS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "CARDINALS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "CUBS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "DIAMONDBACKS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "DODGERS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "GIANTS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "GUARDIANS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "MARINERS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "MARLINS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "METS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "NATIONALS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "ORIOLES",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "PADRES",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "PIRATES",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "PHILLIES",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "RANGERS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "RAYS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "REDS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "RED SOX",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "ROCKIES",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "ROYALS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "TIGERS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "TWINS",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "WHITE SOX",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
    {
      teamName: "YANKEES",
      gameResults: [],
      awayRunsAgainst: [],
      awayRunsFor: [],
      homeRunsAgainst: [],
      homeRunsFor: [],
    },
  ],
});

season2023
  .save()
  .then(() => console.log("The season has been saved!"))
  .catch((err) => console.log(err));