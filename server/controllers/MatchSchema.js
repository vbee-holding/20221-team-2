const express= require("express");
const router = express.Router();
const matchschemal = require("../models/MatchSchema");

router.get('/:id',async (req,res)=>{
  const data= await matchschemal.findOne({IdMatch:req.params.id});
  res.send(data);

});


router.get('/',async (req,res)=>{

  const datas= await matchschemal.find({});
  let dataSends=[];
  for (let i =0;i<datas.length;i++){
    let data=datas[i];
    let newData={
      id:data.IdMatch,
      nextMatchId:data.nextMatchId,
      tournamentRoundText:data.tournamentRoundText,
      startTime:data.startTime,
      name:data.name,
      participants:data.participants
    }
    dataSends.push(newData);


  }
  res.send(dataSends);
})
module.exports = router;