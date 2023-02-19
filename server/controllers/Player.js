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
        //let datatime=new Date(datamatchs.LocalDate);
        //let datemonth=datatime.getDate()+"/"+(datatime.getMonth()+1);
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
        /* if(!dataSends.hasOwnProperty(data)){
            
        } */
        /* if(dataSends.hasOwnProperty(datemonth)){  
            dataSends[datemonth].push(newData);
        } */
    }
    res.send(dataSends);
    
})
module.exports = router;
//API:http://localhost:5005/api/player
/* 
{
    "Franco ARMANI": [
      {
        "name": "Franco ARMANI",
        "image": "https://digitalhub.fifa.com/transform/55e9fe36-b328-44f5-86d8-1cba96a4d05e/1442740056",
        "position": "Goalkeeper",
        "nationImage": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ARG",
        "nation": "Argentina",
        "infomation": {
          "IdTeam": 43922,
          "BirthDate": "Thu Oct 16 1986 07:00:00 GMT+0700 (Indochina Time)",
          "JoinDate": "Tue May 15 2018 07:00:00 GMT+0700 (Indochina Time)",
          "LeaveDate": "Thu Dec 31 2026 07:00:00 GMT+0700 (Indochina Time)",
          "Weight": 88
        }
      }
    ],
    "Rodrigo DE PAUL": [
      {
        "name": "Rodrigo DE PAUL",
        "image": "https://digitalhub.fifa.com/transform/427cc23a-3489-42f1-892f-881b85b857d8/1442742174",
        "position": "Midfielder",
        "nationImage": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ARG",
        "nation": "Argentina",
        "infomation": {
          "IdTeam": 43922,
          "BirthDate": "Tue May 24 1994 07:00:00 GMT+0700 (Indochina Time)",
          "JoinDate": "Fri Nov 13 2020 07:00:00 GMT+0700 (Indochina Time)",
          "LeaveDate": "Sun Dec 31 2034 07:00:00 GMT+0700 (Indochina Time)",
          "Weight": 70
        }
      }
    ],
    "Geronimo RULLI": [
      {
        "name": "Geronimo RULLI",
        "image": "https://digitalhub.fifa.com/transform/08c7e932-41a2-460e-b14b-04903ac5ca8c/1442774135",
        "position": "Goalkeeper",
        "nationImage": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ARG",
        "nation": "Argentina",
        "infomation": {
          "IdTeam": 43922,
          "BirthDate": "Wed May 20 1992 07:00:00 GMT+0700 (Indochina Time)",
          "JoinDate": "Thu May 12 2016 07:00:00 GMT+0700 (Indochina Time)",
          "LeaveDate": "Fri Dec 31 2032 07:00:00 GMT+0700 (Indochina Time)",
          "Weight": 80
        }
      }
    ],
    "RODRIGUEZ GUIDO": [
      {
        "name": "RODRIGUEZ GUIDO",
        "image": "https://digitalhub.fifa.com/transform/7819e5f3-30ca-40b3-82f1-e0d30b83e384/1442743421",
        "position": "Midfielder",
        "nationImage": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ARG",
        "nation": "Argentina",
        "infomation": {
          "IdTeam": 43922,
          "BirthDate": "Tue Apr 12 1994 07:00:00 GMT+0700 (Indochina Time)",
          "JoinDate": "Sat Mar 26 2022 07:00:00 GMT+0700 (Indochina Time)",
          "LeaveDate": "Sun Dec 31 2034 07:00:00 GMT+0700 (Indochina Time)",
          "Weight": 81
        }
      }
    ], */
    