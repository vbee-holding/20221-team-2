const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchGroupSchemal = new Schema({
    Pos: String,
    Rank:String,
    Team:String,
    IdTeam: String,    
    Pld:String,
    W:String,
    D:String,
    L:String,
    GF:String,
    GA:String,
    GD:String,
    Pts:String
});


const MatchGroup = mongoose.model("MatchGroup", MatchGroupSchemal);
module.exports = MatchGroup;
