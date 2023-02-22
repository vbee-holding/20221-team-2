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
    const dataOverviewMatches= await OverviewMatch.find({});
    var dataSends={};
    for (let i = 0; i < datas.length; i++){
        let datamatchs = datas[i];
        let dataOverView=dataOverviewMatches[i];
        const video= await VideoURL.findOne({IdMatch:datamatchs.IDMatch});
        let datatime=new Date(datamatchs.LocalDate);
        let datemonth=datatime.getDate()+"/"+(datatime.getMonth()+1);
        let awayData=JSON.parse(dataOverView.AwayTeam.replaceAll("\\xa0", " "));
        let homeData=JSON.parse(dataOverView.HomeTeam.replaceAll("\\xa0", " "));
        let newData= {
            IdMatch:datamatchs.IDMatch,
            groupStage: datamatchs.Description,
            stadium: "tao bang stadium id",
            linkStadium:datamatchs.IDStadium,
            date:datemonth,
            video:video.VideoURL,
            timehighlight:video.TimePlay,
            table:datamatchs.Group,
            awayTeam:awayData.TeamName,
            linkawayTeam:awayData.IdTeam,
            imageawayTeam:awayData.PictureUrl,
            homeTeam:homeData.TeamName,
            linkhomeTeam:homeData.IdTeam,
            imagehomeTeam:homeData.PictureUrl,
            score:[awayData.Score,homeData.Score],
            scorerawayTeam:awayData.Goals,
            scorerhomeTeam:homeData.Goals,
            imagehightlight:video.ImageURL       
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

