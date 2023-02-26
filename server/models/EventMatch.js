const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventMatchSchemal = new Schema({
    IdMatch:Number,
    EventArr:Array
});


const EventMatch = mongoose.model("EventMatch", EventMatchSchemal);
module.exports = EventMatch;
