const express= require("express");
const router = express.Router();
//const TutorialMatch = require("../models/TutorialMatch");
//const VideoURL = require("../models/VideoURL");
//const OverviewMatch=require("../models/OverviewMatches");
const Team=require("../models/Team");
//const DetailsMatch = require("../models/DetailsMatch")
//const Player = require("../models/Player")

router.get('/:id', async (req,res)=>{
    const team= await Team.findOne({IdTeam:req.params.id})
    res.send(team);

})

router.get('/',async (req,res)=>{
    
    const teamDatas = await Team.find({});
    
    res.send(teamDatas);
})
module.exports = router;
//API:http://localhost:5005/api/team

/* var datasend={Data:[]};
    for (let i = 0; i < teamDatas.length; i++){
        let matchDatasAway = await DetailsMatch.find({IdAwayTeam:teamDatas[i].IdTeam});
        let matchDatasHome = await DetailsMatch.find({IdHomeTeam:teamDatas[i].IdTeam});
        let newData=[];
        for(let j =0;j<matchDatasAway.length;j++){
            
            newData.push(matchDatasAway[j].IdMatch);
            //newData.push(matchDatasHome[j].IdMatch); 
        }
        for(let k =0;k<matchDatasHome.length;k++){
            newData.push(matchDatasHome[k].IdMatch); 
        }
        datasend.Data.push(newData);

    } */
    