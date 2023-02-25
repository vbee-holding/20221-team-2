const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventMatchSchemal = new Schema({
    Group:String,
    Data:Array
});


const EventMatch = mongoose.model("EventMatch", EventMatchSchemal);
module.exports = EventMatch;
