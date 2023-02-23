const express= require("express");
const router = express.Router();
const matchschemal = require("../models/MatchSchema");

router.get('/:id',async (req,res)=>{
  const data= await matchschemal.findOne({IdMatch:req.params.id});
  res.send(data);

});


router.get('/',async (req,res)=>{

  const datas= await matchschemal.find({});
  res.send(datas);
})
module.exports = router;