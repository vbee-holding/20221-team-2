const express= require("express");
const router = express.Router();
const Player = require("../models/Player");
const Team = require("../models/Team");
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }


router.get('/:id', async (req,res)=>{
    let players = await Player.find({IdTeam:req.params.id});

    res.send(players);
})

router.get('/',async (req,res)=>{ 
    const datas = await Player.aggregate((
        [
           { 
             $sample: { size: 100 } 
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
            playerName:titleCase(player.PlayerName.toLowerCase()),
            playerPicture:player.PlayerPicture,
            position:player.PositionLocalized,
            nation:team.Name,
            nationImage:team.PictureUrl.replace("{format}","sq").replace("{size}","4"),
            information:"https://www.google.com/search?q="+player.PlayerName

    }
    dataSends[player.PlayerName.toLowerCase()]=newData;
          
    } 
    res.send(dataSends);
    
})
module.exports = router;