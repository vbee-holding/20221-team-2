const express= require("express");
const router = express.Router();
const TutorialMatch = require("../models/TutorialMatch");
const VideoURL = require("../models/VideoURL");
const OverviewMatch=require("../models/OverviewMatches")
const Stadium = require("../models/Stadium");
const TutorialMatchData=require("../models/TutorialMatchData")



router.get('/:id', async (req,res)=>{
    let datamatchs = await TutorialMatchData.findOne({});
   
    //{"message":"20/11"}
    res.send(datamatchs[req.body.message]);
})

router.get('/',async (req,res)=>{
    const datas= await TutorialMatchData.find({},{_id:0}); 
    res.send(datas[0]);
    
    
})
module.exports = router;
