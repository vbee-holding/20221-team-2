const express= require("express");
const router = express.Router();
const Coach = require("../models/Coach");

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }


router.get('/:id', async (req,res)=>{
    let coach = await Coach.find({IdTeam:req.params.id});
    res.send(coach);
})

module.exports = router;