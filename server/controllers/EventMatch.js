const express= require("express");
const router = express.Router();
const EventMatch = require("../models/EventMatch")

router.get('/:id', async (req,res)=>{
    let datamatchs = await EventMatch.findOne({IdMatch: req.params.id}); 
    
    res.send(datamatchs);
})
router.get('/',async (req,res)=>{
    const datas= await EventMatch.find({});
    res.send(datas);
})
module.exports = router;