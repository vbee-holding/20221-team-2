const express= require("express");
const router = express.Router();
const MatchGroup = require("../models/MatchGroup");

router.get('/:id', async (req,res)=>{
  const dataKey = await MatchGroup.findOne({Group: req.params.id});
    
  res.send(dataKey);
});
router.get('/',async (req,res)=>{
  const resDatas = await MatchGroup.find({});
  res.send(resDatas);
});

module.exports = router;
//API:http://localhost:5005/api/matchsgroup
/* {
    "Group": "A",
    "Data": [
      {
        "IdTeam": 43960,
        "Rank": 1,
        "TeamName": "Netherlands",
        "ImgUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/NED",
        "Pld": 3,
        "W": 2,
        "D": 1,
        "L": 0,
        "GD": "+4",
        "Pts": 7,
        "IdMatches": [đã có,chưa copy paste lại]
      },
      {
        "IdTeam": 43879,
        "Rank": 2,
        "TeamName": "Senegal",
        "ImgUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/SEN",
        "Pld": 3,
        "W": 2,
        "D": 0,
        "L": 1,
        "GD": "+1",
        "Pts": 6,
        "IdMatches":  [đã có,chưa copy paste lại]
      },
      {
        "IdTeam": 43927,
        "Rank": 3,
        "TeamName": "Ecuador",
        "ImgUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ECU",
        "Pld": 3,
        "W": 1,
        "D": 1,
        "L": 1,
        "GD": "+1",
        "Pts": 4,
        "IdMatches":  [đã có,chưa copy paste lại]
      },
      {
        "IdTeam": 43834,
        "Rank": 4,
        "TeamName": "Qatar (H)",
        "ImgUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/QAT",
        "Pld": 3,
        "W": 0,
        "D": 0,
        "L": 3,
        "GD": "−6",
        "Pts": 0,
        "IdMatches":  [đã có,chưa copy paste lại]
      }
    ]
  } */

