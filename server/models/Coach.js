const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoachSchema = new Schema({
    IdTeam: Number,
    IdCoach: Number,
    Name:String,
    PictureUrl:String,
    BirthDate:Date
});


const Coach = mongoose.model("TableCoachs", CoachSchema);
module.exports = Coach;
