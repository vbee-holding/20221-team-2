const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StadiumSchema = new Schema({
    IdStadium:Number,
    City:String,
    Stadium:String,
    Capacity:Number,
    City_URL:String,
    Stadium_URL:String 
});

const Stadium = mongoose.model("StadiumTable", StadiumSchema);
module.exports = Stadium;
