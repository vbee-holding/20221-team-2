const express= require("express");
const router = express.Router();
const TutorialMatch = require("../models/TutorialMatch");
const Team = require("../models/Team");

router.get('/',async (req,res)=>{
    //const dataOverviewMatches= await OverviewMatch.findOne({});
    const datas= await TutorialMatch.find({});
    var dataSends=[];
    for (let i = 0; i < datas.length; i++){
        let dataSchema = datas[i];
        let index;
        if(dataSchema.Description=="First stage"){
            continue;
        }
        if(dataSchema.Description=="Round of 16"){
            index=1;
        }
        if(dataSchema.Description=="Semi-final"){
            index=3;
        }
        if(dataSchema.Description=="Quarter-final"){
            index=2;
        }
        if(dataSchema.Description=="Final"){
            index=4;
        }
        let datatime=new Date(dataSchema.LocalDate);
        dataAway=JSON.parse(dataSchema.AwayTeam.replaceAll("\'", "\""));
        dataHome=JSON.parse(dataSchema.HomeTeam.replaceAll("\'", "\""));
        let matchsAway= await Team.findOne({IdTeam:dataAway.IdTeam});
        let matchsHome = await Team.findOne({IdTeam:dataHome.IdTeam});
        let dataAwayTeam={
            id:dataAway.IdTeam,
            resultText:dataAway.Score,
            isWinner:1==dataSchema.Win,
            name:dataAway.TeamName,
            picture:dataAway.PictureUrl,
            IdMatchs:matchsAway.IdMatchs
        }
        let dataHomeTeam={
            id:dataHome.IdTeam,
            resultText:dataHome.Score,
            isWinner:dataSchema.Win==0,
            name:dataHome.TeamName,
            picture:dataHome.PictureUrl,
            IdMatchs:matchsHome.IdMatchs
        }
        
        let newData= {
            IdMatch:dataSchema.IDMatch,
            nextMatchId: dataSchema.NextIdMatch,
            tournamentRoundText:index,   
            startTime:datatime.getFullYear()+"-"+(datatime.getMonth()+1)+"-"+datatime.getDay(),
            name: dataSchema.Description,
            participants:[dataAwayTeam,dataHomeTeam]
        };
        dataSends.push(newData);
    }
    res.send(dataSends);
})
module.exports = router;

//API:http://localhost:5005/api/matchschema
/* [
  {
    "IdMatch": 400128136,
    "nextMatchId": 400128139,
    "tournamentRoundText": 1,
    "startTime": "2022-12-6",
    "name": "Round of 16",
    "participants": [
      {
        "id": "43921",
        "resultText": "1(0)",
        "isWinner": false,
        "name": "United States",
        "picture": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/USA",
        "IdMatchs": "[400235457,400235456,400128136,400235455]"
      },
      {
        "id": "43960",
        "resultText": "3(0)",
        "isWinner": true,
        "name": "Netherlands",
        "picture": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/NED",
        "IdMatchs": "[400235449,400235452,400235450,400128136,400128139]"
      }
    ]
  },
  {
    "IdMatch": 400128131,
    "nextMatchId": 400128139,
    "tournamentRoundText": 1,
    "startTime": "2022-12-0",
    "name": "Round of 16",
    "participants": [
      {
        "id": "43976",
        "resultText": "1(0)",
        "isWinner": false,
        "name": "Australia",
        "picture": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/AUS",
        "IdMatchs": "[400235470,400235469,400128131,400235468]"
      },
      {
        "id": "43922",
        "resultText": "2(0)",
        "isWinner": true,
        "name": "Argentina",
        "picture": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ARG",
        "IdMatchs": "[400235464,400128139,400235461,400235462,400128131,400128143,400128145]"
      }
    ]
  },
  { */

        