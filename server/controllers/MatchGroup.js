const express= require("express");
const router = express.Router();
const MatchGroup = require("../models/MatchGroup");

router.get('/:id', async (req,res)=>{
  const dataKey = await MatchGroup.findOne({Group: req.params.id});
    
  res.send(dataKey);
});
router.get('/',async (req,res)=>{
  const resDatas = await MatchGroup.find({});
  res.send(resDatas);
});

module.exports = router;