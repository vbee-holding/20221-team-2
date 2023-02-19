//Dang sua lai dinh dang du lieu,chua dc,co the cho crawn lai data 

const express= require("express");
const router = express.Router();
const TutorialMatch = require("../models/TutorialMatch");
const VideoURL = require("../models/VideoURL");
const OverviewMatch=require("../models/OverviewMatches")
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
    for (let i = 0; i < dataOverviewMatches.length; i++) {
        dataOverviewMatches[i].AwayTeam=JSON.parse(dataOverviewMatches[i].AwayTeam.replaceAll("\'", "\"").replaceAll("\"\"", "\"").replaceAll("\\xa0"," "));
       
        dataOverviewMatches[i].HomeTeam=JSON.parse(dataOverviewMatches[i].HomeTeam.replaceAll("\'", "\"").replaceAll("\"\"", "\"").replaceAll("\\xa0"," "));
    }
    
    //res.send(JSON.parse(dataOverviewMatches[1].AwayTeam.replaceAll("\'", "\"")));
    res.send(dataOverviewMatches);
    
    
    //res.send(JSON.stringify(cats.AwayTeam));
    /* let test=cats.AwayTeam;
    var values = Object.keys(test).map(function(key) {
        return test[key];
    }); */
    //dataVideo=JSON.parse(dataVideo);   
    //res.send(cats.AwayTeam+playr);
    //res.send(cats);

})
module.exports = router;
