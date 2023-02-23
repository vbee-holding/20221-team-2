const express= require("express");
const router = express.Router();
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

