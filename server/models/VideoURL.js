const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    IdMatch:Number,
    ImageURL:String,
    VideoURL:String,
    TimePlay:String
});


const Video = mongoose.model("VideoURL", VideoSchema);
module.exports = Video;
