const express= require("express");
const router = express.Router();
const TutorialMatchData=require("../models/TutorialMatchData")

router.get('/:id', async (req,res)=>{
    let datamatchs = await TutorialMatchData.findOne({IdMatch:req.body.message});
   
    //{"message":"20/11"}
    res.send(datamatchs);
})

router.get('/',async (req,res)=>{
    const datas= await TutorialMatchData.find({},{_id:0}); 
    res.send(datas[0]);
})
module.exports = router;

