const express= require("express");
const router = express.Router();
const MatchGroup = require("../models/MatchGroup");
const GroupJson = require("../models/GroupJson");
const Team = require("../models/Team");



router.get('/:id', async (req,res)=>{
    const dataId = await MatchGroup.findOne({Pos: req.params.id});
    if(!dataId){
        res.status(404).send({
            message:'not found'
        });
        return;
    } 
    var resData = {
        Group:req.params.id,
        Data: []
     };
    for (let i = 0; i < 4; i++){
        let urlImg= await Team.findOne({IdTeam:JSON.parse(dataId.IdTeam.replaceAll("\'", "\""))[i]});
        let newData= {
            IdTeam: JSON.parse(dataId.IdTeam.replaceAll("\'", "\""))[i],
            Rank: JSON.parse(dataId.Rank.replaceAll("\'", "\""))[i],
            TeamName:JSON.parse(dataId.Team.replaceAll("\'", "\""))[i],
            ImgUrl:urlImg.PictureUrl,
            Pld:JSON.parse(dataId.Pld.replaceAll("\'", "\""))[i],
            W:JSON.parse(dataId.W.replaceAll("\'", "\""))[i],
            D:JSON.parse(dataId.D.replaceAll("\'", "\""))[i],
            L:JSON.parse(dataId.L.replaceAll("\'", "\""))[i],
            GD:JSON.parse(dataId.GD.replaceAll("\'", "\""))[i],
            Pts:JSON.parse(dataId.Pts.replaceAll("\'", "\""))[i],
            IdMatches:urlImg.IdMatchs
        };
        resData.Data.push(newData);
    }
    res.send(resData);
})

router.get('/',async (req,res)=>{
    const datas= await MatchGroup.find({});
    var resDatas = {
        Datas: []
     };
    for (let k = 0; k < datas.length; k++){
        let dataId=datas[k];
        let resData = {
            Group:dataId.Pos,
            Data: []
         };
         for (let i = 0; i < 4; i++){
            let urlImg= await Team.findOne({IdTeam:JSON.parse(dataId.IdTeam.replaceAll("\'", "\""))[i]});
            let newData= {
                IdTeam: JSON.parse(dataId.IdTeam.replaceAll("\'", "\""))[i],
                Rank: JSON.parse(dataId.Rank.replaceAll("\'", "\""))[i],
                TeamName:JSON.parse(dataId.Team.replaceAll("\'", "\""))[i],
                ImgUrl:urlImg.PictureUrl,
                Pld:JSON.parse(dataId.Pld.replaceAll("\'", "\""))[i],
                W:JSON.parse(dataId.W.replaceAll("\'", "\""))[i],
                D:JSON.parse(dataId.D.replaceAll("\'", "\""))[i],
                L:JSON.parse(dataId.L.replaceAll("\'", "\""))[i],
                GD:JSON.parse(dataId.GD.replaceAll("\'", "\""))[i],
                Pts:JSON.parse(dataId.Pts.replaceAll("\'", "\""))[i],
                IdMatches:urlImg.IdMatchs
            };
            resData.Data.push(newData);
        }
        resDatas.Datas.push(resData);

    }
    
    res.send(resDatas);
    
    
  
})

module.exports = router;
//API:http://localhost:5005/api/matchsgroup
/* {
    "Group": "A",
    "Data": [
      {
        "IdTeam": 43960,
        "Rank": 1,
        "TeamName": "Netherlands",
        "ImgUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/NED",
        "Pld": 3,
        "W": 2,
        "D": 1,
        "L": 0,
        "GD": "+4",
        "Pts": 7,
        "IdMatches": "can bo sung____"
      },
      {
        "IdTeam": 43879,
        "Rank": 2,
        "TeamName": "Senegal",
        "ImgUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/SEN",
        "Pld": 3,
        "W": 2,
        "D": 0,
        "L": 1,
        "GD": "+1",
        "Pts": 6,
        "IdMatches": "can bo sung____"
      },
      {
        "IdTeam": 43927,
        "Rank": 3,
        "TeamName": "Ecuador",
        "ImgUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ECU",
        "Pld": 3,
        "W": 1,
        "D": 1,
        "L": 1,
        "GD": "+1",
        "Pts": 4,
        "IdMatches": "can bo sung____"
      },
      {
        "IdTeam": 43834,
        "Rank": 4,
        "TeamName": "Qatar (H)",
        "ImgUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/QAT",
        "Pld": 3,
        "W": 0,
        "D": 0,
        "L": 3,
        "GD": "−6",
        "Pts": 0,
        "IdMatches": "can bo sung____"
      }
    ]
  } */