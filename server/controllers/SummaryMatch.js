const express= require("express");
const router = express.Router();
const SummaryMatch = require("../models/SummaryMatch");

router.get('/:id', async (req,res)=>{
    const match = await SummaryMatch.findOne({IdMatch:req.params.id});
    res.send(match);
})
router.get('/',async (req,res)=>{    
    const matchs = await SummaryMatch.find({}); 
    res.send(matchs);
})
module.exports = router;

/* const match= await SummaryMatch.findOne({IdMatch:req.params.id});
    let away=match.PropertiesAwayTeam;
    let home=match.PropertiesHomeTeam;
    var keys=["Possession","Goals","GoalsConceded","Assists","GoalkeeperGoalPreventions","AttemptAtGoalOnTarget","OffersToReceiveTotal","YellowCards","RedCards","FoulsFor","Offsides"]
    arrAway=[];
    arrHome=[];
    for (let i=0;i<keys.length;i++){
        let key=keys[i];
        for (let j = 0; j < 35; j++){
            if(away[j][0]==key){
                arrAway.push(away[j]);
            }
            if(home[j][0]==key){
                arrHome.push(home[j]);
            }
        }
    }
    let newData={
        IdMatch:match.IdMatch,
        IdAwayTeam:match.IdAwayTeam,
        IdHomeTeam:match.IdHomeTeam,
        PropertiesAwayTeam:arrAway,
        PropertiesHomeTeam:arrHome,
        "-1":match["-1"]
    }
    
    res.send(newData); */