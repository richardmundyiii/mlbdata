const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameResultSchema = new Schema(
  {
    awayTeam: String,
    awayScore: Number,
    homeTeam: String,
    homeScore: Number,
  },
  { _id: false }
);

const teamSchema = new Schema({
  teamName: {
    type: String,
    required: true,
  },
  gameResults: {
    type: [gameResultSchema],
    default: [],
  },
  awayRunsAgainst: [Number],
  awayRunsFor: [Number],
  homeRunsAgainst: [Number],
  homeRunsFor: [Number],
});

const seasonSchema = new Schema({
  year: Number,
  teams: [teamSchema],
});

module.exports = mongoose.model("Season", seasonSchema);
