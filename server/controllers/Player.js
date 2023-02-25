const express= require("express");
const router = express.Router();
const Player = require("../models/Player");
const Team = require("../models/Team");



router.get('/:id', async (req,res)=>{
    let player = await Player.findOne({IdPlayer:req.params.id});
    let team = await Team.findOne({IdTeam:player.IdTeam});
    let dataSend={}
    let newData={
        idTeam:player.IdTeam,
        idPlayer:player.IdPlayer,
        playerName:player.PlayerName,
        playerPicture:player.PlayerPicture,
        position:player.PositionLocalized,
        nation:team.Name,
        nationImage:team.PictureUrl.replace("{format}","sq").replace("{size}","4"),
        infomation:"https://www.google.com/search?q="+player.PlayerName
    }
    dataSend[player.PlayerName.toLowerCase()]=newData;
    res.send(dataSend);
})

router.get('/',async (req,res)=>{ 
    const datas = await Player.aggregate((
        [
           { 
             $sample: { size: 50 } 
           }
        ]
     ));
    var dataSends={};
    for (let k = 0; k < datas.length; k++){
        let player = datas[k];
        let team = await Team.findOne({IdTeam:player.IdTeam});
        
        let newData={
            idTeam:player.IdTeam,
            idPlayer:player.IdPlayer,
            playerName:player.PlayerName,
            playerPicture:player.PlayerPicture,
            position:player.PositionLocalized,
            nation:team.Name,
            nationImage:team.PictureUrl.replace("{format}","sq").replace("{size}","4"),
            infomation:"https://www.google.com/search?q="+player.PlayerName

    }
    dataSends[player.PlayerName.toLowerCase()]=newData;
          
    }
    res.send(dataSends);
    
})
module.exports = router;