const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorialMatchDataSchemal = new Schema({
    "20/11"	:Array,	
    "21/11"	:Array,
    "22/11"	:Array,
    "23/11"	:Array,
    "24/11"	:Array,
    "25/11"	:Array,
    "26/11"	:Array,
    "27/11"	:Array,
    "28/11":Array,
    "29/11"	:Array,
    "30/11"	:Array,
    "1/12"	:Array,
    "2/12"	:Array,
    "3/12"	:Array,
    "4/12"	:Array,
    "5/12"	:Array,
    "6/12"	:Array,
    "7/12"	:Array,
    "9/12"	:Array,
    "10/12"	:Array,
    "11/12"	:Array,
    "14/12"	:Array,
    "15/12"	:Array,
    "17/12"	:Array,
    "18/12":Array
});


const TutorialMatchData = mongoose.model('TutorialMatchJson',TutorialMatchDataSchemal);
module.exports = TutorialMatchData;
