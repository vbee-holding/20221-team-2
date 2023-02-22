const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchschemalSchemal = new Schema({
    IdMatch:Number
});


const matchschemal = mongoose.model("matchschemal", matchschemalSchemal);
module.exports = matchschemal;

