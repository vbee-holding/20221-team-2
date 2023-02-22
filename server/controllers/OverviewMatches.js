//Dang sua lai dinh dang du lieu,chua dc,co the cho crawn lai data 

const express= require("express");
const router = express.Router();
const TutorialMatch = require("../models/TutorialMatch");
const VideoURL = require("../models/VideoURL");
const OverviewMatch=require("../models/OverviewMatches");
const Player=require("../models/Player")
//const Player = require("../models/Player")




router.get('/:id', async (req,res)=>{
    const dataOverviewMatche= await OverviewMatch.find({IdMatch:req.params.id});
    
    res.send(dataOverviewMatche); 
    
    
    
})

router.get('/',async (req,res)=>{
    const dataOverviewMatches= await OverviewMatch.find({});
    
    res.send(dataOverviewMatches); 
})
module.exports = router;


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

       /*  let Away=JSON.parse(data.AwayTeam.replaceAll("\\xa0"," "));
        

        let Home=JSON.parse(data.HomeTeam.replaceAll("\\xa0"," "));
        let Awaybook=JSON.parse(data.AwayTeam.replaceAll("\\xa0"," ")).Bookings;
        let Awaygoals=JSON.parse(data.AwayTeam.replaceAll("\\xa0"," ")).Bookings;

        let Homebook=JSON.parse(data.HomeTeam.replaceAll("\\xa0"," ")).Bookings;
        let Homegoals=JSON.parse(data.HomeTeam.replaceAll("\\xa0"," ")).Bookings;
        let awaybookArr=[];
        let homebookArr=[];
        let awaygoalsArr=[];
        let homegoalsArr=[];
        let newData={
            IdMatch:data.IdMatch,
            TimeEnd:data.TimeEnd,
            Away:Away,
            Home:Home
        }; */



/* let datamatchs = await TutorialMatch.findOne({IDMatch: req.params.id});//find hoac findall tim 1 list=>ko index replace dc    
    const video= await VideoURL.findOne({IdMatch:datamatchs.IDMatch});
    datamatchs.AwayTeam=JSON.parse(datamatchs.AwayTeam.replaceAll("\'", "\""));
    datamatchs.HomeTeam=JSON.parse(datamatchs.HomeTeam.replaceAll("\'", "\""));
    datamatchs["ImageURL"]=video.ImageURL;
    datamatchs["VideoURL"]= video.VideoURL;
    res.send(datamatchs); */
  /*   const data= await OverviewMatch.findOne({IdMatch:400128082});
    let Away=JSON.parse(data.AwayTeam.replaceAll("\\xa0"," "));
    let Home=JSON.parse(data.HomeTeam.replaceAll("\\xa0"," "));
    
    let awaybookingsArr=[];
    for (let i = 0; i < Away.Bookings.length; i++){
        let playerData=await Player.findOne({IdPlayer:Number(Away.Bookings[i].IdPlayer)});
        let awaybook={
            Card:Away.Bookings[i].Card,
            IdPlayer:Away.Bookings[i].IdPlayer,
            NamePlayer:playerData.PlayerName,
            JerseyNum:playerData.JerseyNum,
            IdTeam:Away.Bookings[i].IdTeam,
            Minute:Away.Bookings[i].Minute
        }
        awaybookingsArr.push(awaybook);
    }
    
    
    let homebookingArr=[];
    for (let j = 0; j < Home.Bookings.length; j++){
        let playerData=await Player.findOne({IdPlayer:Number(Home.Bookings[j].IdPlayer)});
        let homebook={
            Card:Home.Bookings[j].Card,
            IdPlayer:Home.Bookings[j].IdPlayer,
            NamePlayer:playerData.PlayerName,
            JerseyNum:playerData.JerseyNum,
            IdTeam:Home.Bookings[j].IdTeam,
            Minute:Home.Bookings[j].Minute
        }
        homebookingArr.push(homebook);
    }
    
    
    
    let awayGoalArr=[];
    for (let k = 0; k < Away.Goals.length; k++){
        let playerData=await Player.findOne({IdPlayer:Number(Away.Goals[k].IdPlayer)});
        let awaygoal={
            Type:Away.Goals[k].Type,
            IdPlayer:Away.Goals[k].IdPlayer,
            NamePlayer:playerData.PlayerName,
            JerseyNum:playerData.JerseyNum,
            IdTeam:Away.Goals[k].IdTeam,
            Minute:Away.Goals[k].Minute
        }
        awayGoalArr.push(awaygoal);
    }
    
    
    let homeGoalArr=[];
    for (let h = 0; h < Home.Goals.length; h++){
        let playerData=await Player.findOne({IdPlayer:Number(Home.Goals[h].IdPlayer)});
        let homegoal={
            Type:Home.Goals[h].Type,
            IdPlayer:Home.Goals[h].IdPlayer,
            NamePlayer:playerData.PlayerName,
            JerseyNum:playerData.JerseyNum,
            IdTeam:Home.Goals[h].IdTeam,
            Minute:Home.Goals[h].Minute
        }
        homeGoalArr.push(homegoal);
    }
    
    
    
    
    
    let AwayData={
        Score:Away.Score,
        IdTeam:Away.IdTeam,
        PictureUrl:Away.PictureUrl,
        Tactics:Away.Tactics,
        TeamName:Away.TeamName,
        Bookings:awaybookingsArr,
        Goals:awayGoalArr,
        Substitutions:Away.Substitutions
    };
    let HomeData={
        Score:Home.Score,
        IdTeam:Home.IdTeam,
        PictureUrl:Home.PictureUrl,
        Tactics:Home.Tactics,
        TeamName:Home.TeamName,
        Bookings:homebookingArr,
        Goals:homeGoalArr,
        Substitutions:Home.Substitutions
    };
    
    let newData={
        IdMatch:data.IdMatch,
        TimeEnd:data.TimeEnd,
        AwayTeam:AwayData,
        HomeTeam:HomeData
    };
    res.send(newData);  */