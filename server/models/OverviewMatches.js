const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OverviewMatchSchema = new Schema({
    IdMatch:Number,
    AwayTeam:Object,
    HomeTeam:Object,
    TimeEnd:String
});


const OverviewMatch = mongoose.model("OverviewMatch", OverviewMatchSchema);
module.exports = OverviewMatch;

