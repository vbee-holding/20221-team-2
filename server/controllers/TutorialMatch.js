const express= require("express");
const router = express.Router();
const TutorialMatch = require("../models/TutorialMatch");
const VideoURL = require("../models/VideoURL");
const OverviewMatch=require("../models/OverviewMatches")
//const Player = require("../models/Player")




router.get('/:id', async (req,res)=>{
    let datamatchs = await TutorialMatch.findOne({IDMatch: req.params.id});//find hoac findall tim 1 list=>ko index replace dc 
    const video= await VideoURL.findOne({IdMatch:datamatchs.IDMatch});
    let datatime=new Date(datamatchs.LocalDate);
    let newData= {
        IdMatch:datamatchs.IdMatch,
        groupStage: datamatchs.Description,
        stadium: "tao bang stadium id",
        stadiumId:datamatchs.IDStadium,
        date:datatime.getDate()+"/"+(datatime.getMonth()+1),
        urlVideo:video.VideoURL,
        timeHightLight:null,
        eventGoals:null,
        urlImage:video.ImageURL,
        group:datamatchs.Group,
        AwayTeam:JSON.parse(datamatchs.AwayTeam.replaceAll("\'", "\"")),
        HomeTeam:JSON.parse(datamatchs.HomeTeam.replaceAll("\'", "\"")),
    };
    res.send(newData);
})

router.get('/',async (req,res)=>{
    //const dataOverviewMatches= await OverviewMatch.findOne({});
    const datas= await TutorialMatch.find({});
    var dataSends={};
    for (let i = 0; i < datas.length; i++){
        let datamatchs = datas[i];
        const video= await VideoURL.findOne({IdMatch:datamatchs.IDMatch});
        let datatime=new Date(datamatchs.LocalDate);
        let datemonth=datatime.getDate()+"/"+(datatime.getMonth()+1);
        let newData= {
            IdMatch:datamatchs.IdMatch,
            groupStage: datamatchs.Description,
            stadium: "tao bang stadium id",
            stadiumId:datamatchs.IDStadium,
            date:datemonth,
            urlVideo:video.VideoURL,
            timeHightLight:null,
            eventGoals:null,
            urlImage:video.ImageURL,
            group:datamatchs.Group,
            AwayTeam:JSON.parse(datamatchs.AwayTeam.replaceAll("\'", "\"")),
            HomeTeam:JSON.parse(datamatchs.HomeTeam.replaceAll("\'", "\"")),
        };
        if(!dataSends.hasOwnProperty(datemonth)){
            dataSends[datemonth]=[newData];
        }
        if(dataSends.hasOwnProperty(datemonth)){  
            dataSends[datemonth].push(newData);
        }
    }
    res.send(dataSends);
})
module.exports = router;


//Api: http://localhost:5005/api/tutorialmatch
/* {
    "22/11": [
      {
        "groupStage": "First stage",
        "stadium": "tao bang stadium id",
        "stadiumId": 400090322,
        "date": "22/11",
        "urlVideo": "https://www.fifa.com/fifaplus/en/watch/6rnLprZqfXGriMwByd6wt8",
        "timeHightLight": null,
        "eventGoals": null,
        "urlImage": "https://digitalhub.fifa.com/transform/b943fe69-9cc1-493b-98cd-e8fd0afe204f/USA_WAL_B_FWC22_2",
        "group": "Group D",
        "AwayTeam": {
          "Score": 0,
          "IdTeam": "43888",
          "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/TUN",
          "TeamName": "Tunisia"
        },
        "HomeTeam": {
          "Score": 0,
          "IdTeam": "43941",
          "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/DEN",
          "TeamName": "Denmark"
        }
      },
      {
        "groupStage": "First stage",
        "stadium": "tao bang stadium id",
        "stadiumId": 400090322,
        "date": "22/11",
        "urlVideo": "https://www.fifa.com/fifaplus/en/watch/6rnLprZqfXGriMwByd6wt8",
        "timeHightLight": null,
        "eventGoals": null,
        "urlImage": "https://digitalhub.fifa.com/transform/b943fe69-9cc1-493b-98cd-e8fd0afe204f/USA_WAL_B_FWC22_2",
        "group": "Group D",
        "AwayTeam": {
          "Score": 0,
          "IdTeam": "43888",
          "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/TUN",
          "TeamName": "Tunisia"
        },
        "HomeTeam": {
          "Score": 0,
          "IdTeam": "43941",
          "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/DEN",
          "TeamName": "Denmark"
        }
      },
      {
        "groupStage": "First stage",
        "stadium": "tao bang stadium id",
        "stadiumId": 400090320,
        "date": "22/11",
        "urlVideo": "https://www.fifa.com/fifaplus/en/watch/6rnLprZqfXGriMwByd6wt8",
        "timeHightLight": null,
        "eventGoals": null,
        "urlImage": "https://digitalhub.fifa.com/transform/b943fe69-9cc1-493b-98cd-e8fd0afe204f/USA_WAL_B_FWC22_2",
        "group": "Group B",
        "AwayTeam": {
          "Score": 1,
          "IdTeam": "43974",
          "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/WAL",
          "TeamName": "Wales"
        }, */
        