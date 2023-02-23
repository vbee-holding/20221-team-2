const express= require("express");
const router = express.Router();
const Player = require("../models/Player");
const Team = require("../models/Team");



router.get('/:id', async (req,res)=>{
    const cat = await Player.findOne({IdPlayer:req.params.id});
    if(!cat){
        res.status(404).send({
            message:'players not found'
        });
        return;
    }

    res.send(cat);
})

router.get('/',async (req,res)=>{ 
    const datas= await Player.find({});
    var dataSends={};
    for (let i = 0; i < datas.length; i++){
        let dataPlayer = datas[i];
        const teamData= await Team.findOne({IdTeam:dataPlayer.IdTeam});
        let newData= {
            name:dataPlayer.PlayerName,
            image:dataPlayer.PlayerPicture,
            position:dataPlayer.PositionLocalized,
            nationImage:teamData.PictureUrl,
            nation:teamData.Name,
            infomation:{
                IdTeam:dataPlayer.IdTeam,
                BirthDate:dataPlayer.BirthDate,
                JoinDate:dataPlayer.JoinDate,
                LeaveDate:dataPlayer.LeaveDate,
                Weight:dataPlayer.Weight
            }
        };
        dataSends[dataPlayer.PlayerName]=[newData];       
    }
    res.send(dataSends);
    
})
module.exports = router;