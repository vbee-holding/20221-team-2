const express= require("express");
const router = express.Router();
const TutorialMatch = require("../models/TutorialMatch");
const VideoURL = require("../models/VideoURL");
const OverviewMatch=require("../models/OverviewMatches")
const Stadium = require("../models/Stadium");




router.get('/:id', async (req,res)=>{
    let datamatchs = await TutorialMatch.findOne({IDMatch: req.params.id});//find hoac findall tim 1 list=>ko index replace dc 
    let video= await VideoURL.findOne({IdMatch:datamatchs.IDMatch});
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
    const datas= await TutorialMatch.find({});
    const dataOverviewMatches= await OverviewMatch.find({});
    
    var dataSends={};
    for (let i = 0; i < datas.length; i++){
        let datamatchs = datas[i];
        let dataOverView=dataOverviewMatches[i];
        let video= await VideoURL.findOne({IdMatch:datamatchs.IDMatch});
        let stadium = await Stadium.findOne({IdStadium:datamatchs.IDStadium});
        let datatime=new Date(datamatchs.LocalDate);
        let datemonth=datatime.getDate()+"/"+(datatime.getMonth()+1);
        let awayData=dataOverView.AwayTeam;
        let homeData=dataOverView.HomeTeam;
        let newData= {
            IdMatch:datamatchs.IDMatch,
            groupStage: datamatchs.Description,
            stadium: stadium.Stadium,
            linkStadium:"https://vi.wikipedia.org/"+stadium.Stadium_URL,
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
        else {  
            dataSends[datemonth].push(newData);
        }
    }
    res.send(dataSends);
    
    
})
module.exports = router;

