const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    IdTeam: Number,
    IdPlayer: Number,
    PlayerName:String,
    PlayerPicture:String,
    JerseyNum:Number,
    PositionLocalized:String,
    BirthDate:String,
    JoinDate:String,
    LeaveDate:String,
    Weight: Number
});


const Player = mongoose.model("TablePlayers", PlayerSchema);
module.exports = Player;
