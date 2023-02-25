
//eventstablematch extract from overview table 
const express= require("express");
const router = express.Router();
const OverviewMatch=require("../models/OverviewMatches");
const Player = require("../models/Player");
const compute = (str ='') => {
    let total = 0;
    str = str.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while (str.length) {
       total += parseFloat(str.shift());
    };
    return total;
 };
 function InsertSort(Arrs, data) {
    if(Arrs.length==0 ){
        Arrs.push(data);
    }
    else{    
        for (let i=0;i<Arrs.length;i++){       
            if(compute(Arrs[i].Minute.replace("p",""))<compute(data.Minute.replace("p",""))){  
                if(i==Arrs.length-1){
                    Arrs.push(data);
                    break;
                }
            }
            else{
                Arrs.splice(i, 0, data);
                break;
            }
        }
    } 
    return Arrs;
}

router.get('/:id', async (req,res)=>{
    const dataOverviewMatche= await OverviewMatch.findOne({IdMatch:req.params.id});
    let Away=dataOverviewMatche.AwayTeam;
    let Home=dataOverviewMatche.HomeTeam;
    let insertSortArr=[];
    for (let j=0;j<Away.Bookings.length;j++){
        let eachData=Away.Bookings[j];
        let playerData=await Player.findOne({IdPlayer:eachData.IdPlayer});
        let dataNeed={
            Card:eachData.Card,
            IdPlayer:Number(eachData.IdPlayer),
            NamePlayer:playerData.PlayerName,
            JerseyNum:eachData.JerseyNum,
            PositionLocalized:eachData.PositionLocalized,
            Minute:eachData.Minute.replaceAll("p",""),
            UrlPlayer:eachData.UrlPlayer,
            UrlTeam:dataOverviewMatche.LinkAwayTeam,
            UrlPictureTeam:Away.PictureUrl,
            TeamName:Away.TeamName,
            IdTeam:Away.IdTeam
        }
        InsertSort(insertSortArr,dataNeed);
    }
    
    for (let j=0;j<Home.Bookings.length;j++){
        let eachData=Home.Bookings[j];
        let playerData=await Player.findOne({IdPlayer:eachData.IdPlayer});
        let dataNeed={
            Card:eachData.Card,
            IdPlayer:Number(eachData.IdPlayer),
            NamePlayer:playerData.PlayerName,
            JerseyNum:eachData.JerseyNum,
            PositionLocalized:eachData.PositionLocalized,
            Minute:eachData.Minute.replaceAll("p",""),
            UrlPlayer:eachData.UrlPlayer,
            UrlTeam:dataOverviewMatche.LinkHomeTeam,
            UrlPictureTeam:Home.PictureUrl,
            TeamName:Home.TeamName,
            IdTeam:Home.IdTeam
        }
        InsertSort(insertSortArr,dataNeed);
    }
    
    for (let k = 0; k < Away.Goals.length; k++){
        let eachData=Away.Goals[k];
        let awaygoal={
            Type:eachData.Type,
            IdPlayer:eachData.IdPlayer,
            NamePlayer:eachData.NamePlayer,
            JerseyNum:eachData.JerseyNum,
            PositionLocalized:eachData.PositionLocalized,
            IdTeam:eachData.IdTeam,
            Minute:eachData.Minute.replaceAll("p",""),
            UrlPlayer:eachData.UrlPlayer,
            UrlTeam:dataOverviewMatche.LinkAwayTeam,
            UrlPictureTeam:Away.PictureUrl,
            TeamName:Away.TeamName,
        }
        InsertSort(insertSortArr,awaygoal);
    }
    for (let h = 0; h < Home.Goals.length; h++){
        let eachData=Home.Goals[h];
        //let playerData=await Player.findOne({IdPlayer:Number(eachData.IdPlayer)});
        let homegoal={
            Type:eachData.Type,
            IdPlayer:eachData.IdPlayer,
            NamePlayer:eachData.PlayerName,
            JerseyNum:eachData.JerseyNum,
            PositionLocalized:playerData.PositionLocalized,
            IdTeam:eachData.IdTeam,
            Minute:eachData.Minute,
            UrlPlayer:eachData.UrlPlayer,
            UrlTeam:dataOverviewMatche.LinkHomeTeam,
            UrlPictureTeam:Home.PictureUrl,
            TeamName:Home.TeamName,
        }
        InsertSort(insertSortArr,homegoal);
    }
    for (let h = 0; h < Home.Substitutions.length; h++){
        let eachData=Home.Substitutions[h];
        let playerOn=await Player.findOne({IdPlayer:Number(eachData.IdPlayerOn)});
        let playerOff=await Player.findOne({IdPlayer:Number(eachData.IdPlayerOff)});
        let homesub={
            IdPlayerOff:Number(eachData.IdPlayerOff),
            PlayerOffName:eachData.PlayerOffName,
            JerseyNumOff:playerOff.JerseyNum,
            PositionLocalizedOff:playerOff.PositionLocalized,
            UrlPlayerOff:eachData.UrlPlayerOff,

            IdPlayerOn:Number(eachData.IdPlayerOn),
            PlayerOnName:eachData.PlayerOnName,
            JerseyNumOn:playerOn.JerseyNum,
            PositionLocalizedOn:playerOn.PositionLocalized,
            UrlPlayerOn:eachData.UrlPlayerOn,
            
            Minute:eachData.Minute,
            UrlTeam:dataOverviewMatche.LinkHomeTeam,
            UrlPictureTeam:Home.PictureUrl,
            TeamName:Home.TeamName,
            
        }
        InsertSort(insertSortArr,homesub);
    }
    for (let h = 0; h < Away.Substitutions.length; h++){
        let eachData=Away.Substitutions[h];
        let playerOn=await Player.findOne({IdPlayer:Number(eachData.IdPlayerOn)});
        let playerOff=await Player.findOne({IdPlayer:Number(eachData.IdPlayerOff)});
        let awaysub={
            IdPlayerOff:Number(eachData.IdPlayerOff),
            PlayerOffName:eachData.PlayerOffName,
            JerseyNumOff:playerOff.JerseyNum,
            PositionLocalizedOff:playerOff.PositionLocalized,
            UrlPlayerOff:eachData.UrlPlayerOff,

            IdPlayerOn:Number(eachData.IdPlayerOn),
            PlayerOnName:eachData.PlayerOnName,
            JerseyNumOn:playerOn.JerseyNum,
            PositionLocalizedOn:playerOn.PositionLocalized,
            UrlPlayerOn:eachData.UrlPlayerOn,
            
            Minute:eachData.Minute,
            UrlTeam:dataOverviewMatche.LinkAwayTeam,
            UrlPictureTeam:Away.PictureUrl,
            TeamName:Away.TeamName,
            
        }
        InsertSort(insertSortArr,awaysub);
    }
    





    
    
    res.send(dataOverviewMatche); 
})
router.get('/',async (req,res)=>{
    const dataOverviewMatches= await OverviewMatch.find({});
    let dataNeedSends=[];
    for(let i=0;i<dataOverviewMatches.length;i++){
        const dataOverviewMatche= dataOverviewMatches[i];
        let Away=dataOverviewMatche.AwayTeam;
        let Home=dataOverviewMatche.HomeTeam;
        let insertSortArr=[];
        for (let j=0;j<Away.Bookings.length;j++){
            let eachData=Away.Bookings[j];
            let playerData=await Player.findOne({IdPlayer:eachData.IdPlayer});
            let dataNeed={
                Card:eachData.Card,
                IdPlayer:Number(eachData.IdPlayer),
                NamePlayer:playerData.PlayerName,
                JerseyNum:eachData.JerseyNum,
                PositionLocalized:eachData.PositionLocalized,
                Minute:eachData.Minute.replaceAll("p",""),
                UrlPlayer:eachData.UrlPlayer,
                UrlTeam:dataOverviewMatche.LinkAwayTeam,
                UrlPictureTeam:Away.PictureUrl,
                TeamName:Away.TeamName,
                IdTeam:Away.IdTeam
            }
            InsertSort(insertSortArr,dataNeed);
        }
        
        for (let j=0;j<Home.Bookings.length;j++){
            let eachData=Home.Bookings[j];
            let playerData=await Player.findOne({IdPlayer:eachData.IdPlayer});
            let dataNeed={
                Card:eachData.Card,
                IdPlayer:Number(eachData.IdPlayer),
                NamePlayer:playerData.PlayerName,
                JerseyNum:eachData.JerseyNum,
                PositionLocalized:eachData.PositionLocalized,
                Minute:eachData.Minute.replaceAll("p",""),
                UrlPlayer:eachData.UrlPlayer,
                UrlTeam:dataOverviewMatche.LinkHomeTeam,
                UrlPictureTeam:Home.PictureUrl,
                TeamName:Home.TeamName,
                IdTeam:Home.IdTeam
            }
            InsertSort(insertSortArr,dataNeed);
        }
        
        for (let k = 0; k < Away.Goals.length; k++){
            let eachData=Away.Goals[k];
            let awaygoal={
                Type:eachData.Type,
                IdPlayer:eachData.IdPlayer,
                NamePlayer:eachData.NamePlayer,
                JerseyNum:eachData.JerseyNum,
                PositionLocalized:eachData.PositionLocalized,
                IdTeam:eachData.IdTeam,
                Minute:eachData.Minute.replaceAll("p",""),
                UrlPlayer:eachData.UrlPlayer,
                UrlTeam:dataOverviewMatche.LinkAwayTeam,
                UrlPictureTeam:Away.PictureUrl,
                TeamName:Away.TeamName,
            }
            InsertSort(insertSortArr,awaygoal);
        }
        for (let h = 0; h < Home.Goals.length; h++){
            let eachData=Home.Goals[h];
            let playerData=await Player.findOne({IdPlayer:Number(eachData.IdPlayer)});
            let homegoal={
                Type:eachData.Type,
                IdPlayer:eachData.IdPlayer,
                NamePlayer:eachData.PlayerName,
                JerseyNum:eachData.JerseyNum,
                PositionLocalized:playerData.PositionLocalized,
                IdTeam:eachData.IdTeam,
                Minute:eachData.Minute,
                UrlPlayer:eachData.UrlPlayer,
                UrlTeam:dataOverviewMatche.LinkHomeTeam,
                UrlPictureTeam:Home.PictureUrl,
                TeamName:Home.TeamName,
            }
            InsertSort(insertSortArr,homegoal);
        }
        for (let h = 0; h < Home.Substitutions.length; h++){
            let eachData=Home.Substitutions[h];
            let playerOn=await Player.findOne({IdPlayer:Number(eachData.IdPlayerOn)});
            let playerOff=await Player.findOne({IdPlayer:Number(eachData.IdPlayerOff)});
            let homesub={
                IdPlayerOff:Number(eachData.IdPlayerOff),
                PlayerOffName:eachData.PlayerOffName,
                JerseyNumOff:playerOff.JerseyNum,
                PositionLocalizedOff:playerOff.PositionLocalized,
                UrlPlayerOff:eachData.UrlPlayerOff,
    
                IdPlayerOn:Number(eachData.IdPlayerOn),
                PlayerOnName:eachData.PlayerOnName,
                JerseyNumOn:playerOn.JerseyNum,
                PositionLocalizedOn:playerOn.PositionLocalized,
                UrlPlayerOn:eachData.UrlPlayerOn,
                
                Minute:eachData.Minute,
                UrlTeam:dataOverviewMatche.LinkHomeTeam,
                UrlPictureTeam:Home.PictureUrl,
                TeamName:Home.TeamName,
                
            }
            InsertSort(insertSortArr,homesub);
        }
        for (let h = 0; h < Away.Substitutions.length; h++){
            let eachData=Away.Substitutions[h];
            let playerOn=await Player.findOne({IdPlayer:Number(eachData.IdPlayerOn)});
            let playerOff=await Player.findOne({IdPlayer:Number(eachData.IdPlayerOff)});
            let awaysub={
                IdPlayerOff:Number(eachData.IdPlayerOff),
                PlayerOffName:eachData.PlayerOffName,
                JerseyNumOff:playerOff.JerseyNum,
                PositionLocalizedOff:playerOff.PositionLocalized,
                UrlPlayerOff:eachData.UrlPlayerOff,
    
                IdPlayerOn:Number(eachData.IdPlayerOn),
                PlayerOnName:eachData.PlayerOnName,
                JerseyNumOn:playerOn.JerseyNum,
                PositionLocalizedOn:playerOn.PositionLocalized,
                UrlPlayerOn:eachData.UrlPlayerOn,
                
                Minute:eachData.Minute,
                UrlTeam:dataOverviewMatche.LinkAwayTeam,
                UrlPictureTeam:Away.PictureUrl,
                TeamName:Away.TeamName,
                
            }
            InsertSort(insertSortArr,awaysub);
        }
        let dataSend={
            IdMatch:dataOverviewMatche.IdMatch,
            EventArr:insertSortArr
        }
        dataNeedSends.push(dataSend);
        
    }
    
    res.send(dataNeedSends); 
})
module.exports = router;


/* const dataOverviewMatche= await OverviewMatch.findOne({IdMatch:req.params.id});
const tutorialData=await TutorialMatch.findOne({IdMatch:req.params.id}); 
const videoData = await Video.findOne({IdMatch:req.params.id});
let datatime=tutorialData.LocalDate;
const stadiumData = await Stadium.findOne({IdStadium:tutorialData.IDStadium});
let newData={
    IdMatch:dataOverviewMatche.IdMatch,
    Date:datatime.getDate()+"/"+(datatime.getMonth()+1),
    TimeEnd:dataOverviewMatche.TimeEnd,
    LinkAwayTeam:"https://www.google.com/search?q="+dataOverviewMatche.AwayTeam.TeamName,
    LinkHomeTeam:"https://www.google.com/search?q="+dataOverviewMatche.HomeTeam.TeamName,
    Description:tutorialData.Description,
    Group:tutorialData.Group,
    IdStadium:stadiumData.IdStadium,
    Stadium:stadiumData.Stadium,
    Stadium_URL:"https://vi.wikipedia.org"+stadiumData.Stadium_URL,
    ImageURL:videoData.ImageURL,
    VideoURL:videoData.VideoURL,
    TimePlay:videoData.TimePlay,
    AwayTeam:dataOverviewMatche.AwayTeam,
    HomeTeam:dataOverviewMatche.HomeTeam
}
res.send(newData);  */

/* 
let newData={
    IdMatch:dataOverviewMatche.IdMatch,
    Date:dataOverviewMatche.Date,
    TimeEnd:dataOverviewMatche.TimeEnd,
    LinkAwayTeam:dataOverviewMatche.LinkAwayTeam,
    LinkHomeTeam:dataOverviewMatche.LinkHomeTeam,
    Description:dataOverviewMatche.Description,
    Group:dataOverviewMatche.Group,
    IdStadium:dataOverviewMatche.IdStadium,
    Stadium:dataOverviewMatche.Stadium,
    Stadium_URL:dataOverviewMatche.Stadium_URL,
    ImageURL:dataOverviewMatche.ImageURL,
    VideoURL:dataOverviewMatche.VideoURL,
    TimePlay:dataOverviewMatche.TimePlay,
    Event:[],
    AwayTeam:dataOverviewMatche.AwayTeam,
    HomeTeam:dataOverviewMatche.HomeTeam

} */