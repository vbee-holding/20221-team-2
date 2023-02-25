const express= require("express");
const router = express.Router();
const OverviewMatch=require("../models/OverviewMatches");

router.get('/:id', async (req,res)=>{
    const dataOverviewMatche= await OverviewMatch.findOne({IdMatch:req.params.id});
    res.send(dataOverviewMatche);    
})

router.get('/',async (req,res)=>{
    const dataOverviewMatches= await OverviewMatch.find({});
    res.send(dataOverviewMatches); 
})
module.exports = router;