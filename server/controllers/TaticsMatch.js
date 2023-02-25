const express= require("express");
const router = express.Router();
const TaticsMatch = require("../models/TaticsMatch")

router.get('/:id', async (req,res)=>{
    let datamatch = await TaticsMatch.findOne({IdMatch: req.params.id}); 
    res.send(datamatch);
})
router.get('/',async (req,res)=>{
    const datas= await TaticsMatch.find({});
    res.send(datas);
})
module.exports = router;
//Status:2 du bi
//Position:0:GOALKEEPER
//position:1:DEFENDER
//Position:2:MIDFIELDER
//Postition:3:FORWARD
//position:4:SUBSTITUTIONS
//-----------noise reduction data--------------------------
/* let Away=datamatch.AwayTeam;
let Home=datamatch.HomeTeam;
let CoachesAway=[];
//let test=Away.Coaches[1];
for(let j =0;j<Away.Coaches.length;j++){
    let eachData=Away.Coaches[j];
    let newCoachesAway={
        IdCoach:eachData.IdCoach,
        IdCountry:eachData.IdCountry,
        PictureUrl:eachData.PictureUrl,
        Name:eachData.Name[0].Description,
        Role:eachData.Role,
        SpecialStatus:eachData.SpecialStatus

    }
    CoachesAway.push(newCoachesAway);
}
let CoachesHome=[];
//let test=Away.Coaches[1];
for(let j =0;j<Home.Coaches.length;j++){
    let eachData=Home.Coaches[j];
    let newCoachesHome={
        IdCoach:eachData.IdCoach,
        IdCountry:eachData.IdCountry,
        PictureUrl:eachData.PictureUrl,
        Name:eachData.Name[0].Description,
        Role:eachData.Role,
        SpecialStatus:eachData.SpecialStatus

    }
    CoachesHome.push(newCoachesHome);
}
let PlayerAway=[];
//let test=Away.Coaches[1];
for(let j =0;j<Away.Players.length;j++){
    let eachData=Away.Players[j];
    let newPlayerAway={
        IdPlayer:eachData.IdPlayer,
        ShirtNumber:eachData.ShirtNumber,
        Status:eachData.Status,
        Captain:eachData.Captain,
        Name:eachData.PlayerName[0].Description,
        Position:eachData.Position,
        PlayerPicture:eachData.PlayerPicture.PictureUrl,
        SpecialStatus:eachData.SpecialStatus,
        FieldStatus:eachData.FieldStatus
    }
    PlayerAway.push(newPlayerAway);
}
let PlayerHome=[];
//let test=Away.Coaches[1];
for(let j =0;j<Home.Players.length;j++){
    let eachData=Home.Players[j];
    let newPlayerHome={
        IdPlayer:eachData.IdPlayer,
        ShirtNumber:eachData.ShirtNumber,
        Status:eachData.Status,
        Captain:eachData.Captain,
        Name:eachData.PlayerName[0].Description,
        Position:eachData.Position,
        PlayerPicture:eachData.PlayerPicture.PictureUrl,
        SpecialStatus:eachData.SpecialStatus,
        FieldStatus:eachData.FieldStatus
    }
    PlayerHome.push(newPlayerHome);
}
 */