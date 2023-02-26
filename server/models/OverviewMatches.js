const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OverviewMatchSchema = new Schema({
    IdMatch:Number,
    Date:String,
    TimeEnd:String,
    LinkAwayTeam:String,
    LinkHomeTeam:String,
    Description:String,
    Group:String,
    IdStadium:Number,
    Stadium:String,
    Stadium_URL:String,
    ImageURL:String,
    VideoURL:String,
    TimePlay:String,
    AwayTeam:Object,
    AwayTeamPenaltyScore:Number,
    HomeTeam:Object,
    HomeTeamPenaltyScore:Number
});


const OverviewMatch = mongoose.model("OverviewMatch", OverviewMatchSchema);
module.exports = OverviewMatch;
