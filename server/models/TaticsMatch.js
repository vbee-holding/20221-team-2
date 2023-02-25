const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaticsMatchSchema = new Schema({
    IdMatch:Number,
    AwayTeam:Object,
    HomeTeam:Object
});

const TaticsMatch = mongoose.model("TaticsMatch", TaticsMatchSchema);
module.exports = TaticsMatch;