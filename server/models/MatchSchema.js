const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchschemalSchemal = new Schema({
    IdMatch:Number,
    nextMatchId:Number,
    tournamentRoundText:String,
    startTime:String,
    name:String,
    participants:Array
});


const matchschemal = mongoose.model("matchschemal", matchschemalSchemal);
module.exports = matchschemal;
