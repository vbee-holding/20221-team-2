const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchemal = new Schema({
    title:String,
    items:Array,
    seeAllLink:String
});


const News = mongoose.model("news", NewsSchemal);
module.exports = News;
