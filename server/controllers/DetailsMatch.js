const express= require("express");
const router = express.Router();
const DetailsMatch = require("../models/DetailsMatch")

router.get('/:id', async (req,res)=>{
    let datamatchs = await TutorialMatch.findOne({IDMatch: req.params.id}); 
    
    res.send(datamatchs.PropertiesAwayTeam);
})
router.get('/',async (req,res)=>{
    const datas= await DetailsMatch.findOne({});
    let away=JSON.parse(datas.PropertiesAwayTeam);
    res.send(away);
})
module.exports = router;