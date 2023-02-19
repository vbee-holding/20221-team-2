const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    IdTeam: Number,  
    IdAssociation:String,
    Name:String,
    PictureUrl:String,
    IdMatchs:String   
});


const Team = mongoose.model("TableTeams", TeamSchema);
module.exports = Team;
