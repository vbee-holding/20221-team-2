const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OverviewMatchSchema = new Schema({
    IdMatch:Number,
    AwayTeam:String,
    HomeTeam:String,
    TimeEnd:String
});


const OverviewMatch = mongoose.model("OverviewMatch", OverviewMatchSchema);
module.exports = OverviewMatch;
