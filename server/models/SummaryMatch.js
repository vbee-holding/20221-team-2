const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SummaryMatchSchema = new Schema({
    IdMatch:Number,
    IdAwayTeam:Number,
    IdHomeTeam:Number,
    PropertiesAwayTeam:Array,
    PropertiesHomeTeam:Array,
    "-1":Array
});

const SummaryMatch = mongoose.model("SummaryMatch", SummaryMatchSchema);
module.exports = SummaryMatch;
