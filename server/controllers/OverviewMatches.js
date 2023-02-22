//Dang sua lai dinh dang du lieu,chua dc,co the cho crawn lai data 

const express= require("express");
const router = express.Router();
const TutorialMatch = require("../models/TutorialMatch");
const VideoURL = require("../models/VideoURL");
const OverviewMatch=require("../models/OverviewMatches");
const Player=require("../models/Player")
//const Player = require("../models/Player")




router.get('/:id', async (req,res)=>{
    let datamatchs = await TutorialMatch.findOne({IDMatch: req.params.id});//find hoac findall tim 1 list=>ko index replace dc    
    const video= await VideoURL.findOne({IdMatch:datamatchs.IDMatch});
    datamatchs.AwayTeam=JSON.parse(datamatchs.AwayTeam.replaceAll("\'", "\""));
    datamatchs.HomeTeam=JSON.parse(datamatchs.HomeTeam.replaceAll("\'", "\""));
    datamatchs["ImageURL"]=video.ImageURL;
    datamatchs["VideoURL"]= video.VideoURL;
    res.send(datamatchs);
})

router.get('/',async (req,res)=>{
    const dataOverviewMatches= await OverviewMatch.find({});
    var dataSends=[];

    for (let i = 0; i < dataOverviewMatches.length; i++) {
        let data=dataOverviewMatches[i];
        let Away=JSON.parse(data.AwayTeam.replaceAll("\\xa0"," "));
        let Home=JSON.parse(data.HomeTeam.replaceAll("\\xa0"," "));
        /* let awayBookingArr=[];
        for (let j=0;j<Away.Bookings.length;j++){
            let eachData=Away.Bookings[j];
            let playerData=await Player.findOne({IdPlayer:eachData.IdPlayer});
            let dataNeed={
                IdPlayer:eachData.IdPlayer,
                NamePlayer:playerData.PlayerName,
                JerseyNum:playerData.JerseyNum,
                Card:eachData.Card,
                Minute:eachData.Minute,
                UrlPlayer:null
            }
            awayBookingArr.push(dataNeed);
        }
        let homeBookingArr=Home.Bookings;
        for (let k=0;k<Home.Bookings.length;k++){
            let eachData=Home.Bookings[k];
            let playerData=await Player.findOne({IdPlayer:eachData.IdPlayer});
            let dataNeed={
                IdPlayer:eachData.IdPlayer,
                NamePlayer:playerData.PlayerName,
                JerseyNum:playerData.JerseyNum,
                Card:eachData.Card,
                Minute:eachData.Minute,
                UrlPlayer:null
            }
            homeBookingArr.push(dataNeed);
        }
        let dataAway={
            IdTeam:Away.IdTeam,
            PictureUrl:Away.PictureUrl,
            TeamName:Away.TeamName,
            Bookings:awayBookingArr
        } */
        let newData={
            IdMatch:data.IdMatch,
            TimeEnd:data.TimeEnd,
            AwayTeam:Away,
            HomeTeam:Home
        };

        dataSends.push(newData);
    }
    res.send(dataSends);
})
module.exports = router;
