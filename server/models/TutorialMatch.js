const { json } = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorialMatchSchema = new Schema({
    IDMatch: Number,
    LocalDate: Date,
    AwayTeam:Object,
    HomeTeam:Object,
    IDStadium:Number,
    Description:String,
    Group:String,
    ImageURL:String,
    VideoURL:String,
    NextIdMatch:Number,
    Win:Number
});


const TutorialMatch = mongoose.model("TutorialMatch", TutorialMatchSchema);
module.exports = TutorialMatch;
