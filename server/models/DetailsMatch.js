const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetailsMatchSchemal = new Schema({
    IdMatch: Number,
    IdAwayTeam: Number,
    IdHomeTeam:Number,
    PropertiesAwayTeam:String,
    PropertiesHomeTeam:String,
    '-1':String
});


const DetailsMatch = mongoose.model("DetailsMatch", DetailsMatchSchemal);
module.exports = DetailsMatch;