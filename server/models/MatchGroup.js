const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchGroupSchemal = new Schema({
    Group:String,
    Data:Array
});


const MatchGroup = mongoose.model("MatchGroup", MatchGroupSchemal);
module.exports = MatchGroup;
