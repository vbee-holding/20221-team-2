const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OverviewMatchSchema = new Schema({
    IdMatch:Number,
<<<<<<< HEAD
    AwayTeam:String,
    HomeTeam:String
=======
    AwayTeam:Object,
    HomeTeam:Object,
    TimeEnd:String
>>>>>>> 70709d9 (update all api controllers,models matches)
});


const OverviewMatch = mongoose.model("OverviewMatch", OverviewMatchSchema);
module.exports = OverviewMatch;
