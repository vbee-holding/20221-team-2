const express= require("express");
const router = express.Router();
const Team=require("../models/Team");

router.get('/:id', async (req,res)=>{
    const team= await Team.findOne({IdTeam:req.params.id})
    res.send(team);

})
router.get('/',async (req,res)=>{    
    const teamDatas = await Team.find({});
      
    res.send(teamDatas);
})
module.exports = router;