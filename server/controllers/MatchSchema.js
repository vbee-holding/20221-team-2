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
            isWinner:dataAway.Score>dataHome.Score,
            name:dataAway.TeamName,
            picture:dataAway.PictureUrl,
            IdMatchs:matchsAway.IdMatchs
        }
        let dataHomeTeam={
            id:dataHome.IdTeam,
            resultText:dataHome.Score,
            isWinner:dataHome.Score>dataAway.Score,
            name:dataHome.TeamName,
            picture:dataHome.PictureUrl,
            IdMatchs:matchsHome.IdMatchs
        }
        
        let newData= {
            IdMatch:dataSchema.IDMatch,
            nextMatchId: null,
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
      "IdMatch": 400128134,
      "nextMatchId": null,
      "tournamentRoundText": 1,
      "startTime": "2022-12-1",
      "name": "Round of 16",
      "participants": [
        {
          "id": "43879",
          "resultText": 0,
          "isWinner": false,
          "name": "Senegal",
          "picture": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/SEN",
          "IdMatchs": "[400235448,400235451,400128134,400235449]"
        },
        {
          "id": "43942",
          "resultText": 3,
          "isWinner": true,
          "name": "England",
          "picture": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ENG",
          "IdMatchs": "[400235454,400235458,400235457,400128134,400128138]"
        }
      ]
    },
    {
      "IdMatch": 400128132,
      "nextMatchId": null,
      "tournamentRoundText": 1,
      "startTime": "2022-12-1",
      "name": "Round of 16",
      "participants": [
        { */

        