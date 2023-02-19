const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupJsonSchemal = new Schema({
    IdTeam: String,
    Rank:String,
    TeamName:String,
    ImgUrl:String,   
    Pld:String,
    W:String,
    D:String,
    L:String,
    GD:String,
    Pts:String,
    IdMatches:String
});


const GroupJson = mongoose.model('GroupJson',GroupJsonSchemal);
module.exports = GroupJson;