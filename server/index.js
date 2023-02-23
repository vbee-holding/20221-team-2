const express = require("express");

const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path");

const config = require('./config');
const bodyParser = require("body-parser");

mongoose.connect(config.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=> console.log('connected mongodb'));

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..","client/build")));

app.use('/api/player',require("./controllers/Player"));
app.use('/api/tutorialmatch',require("./controllers/TutorialMatch"));
//app.use('/api/hightlight',require("./controllers/VideoURL"));
app.use('/api/overviewmatch',require("./controllers/OverviewMatches"));
app.use('/api/team',require("./controllers/Team"))
app.use('/api/matchgroup',require("./controllers/MatchGroup"))
app.use('/api/detailmatch',require("./controllers/DetailsMatch"));
app.use('/api/matchschema',require("./controllers/MatchSchema"));

/* app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, "..","client/build/index.html"));
}); */

//const PORT = 5005;
app.listen(config.PORT,()=> console.log('server running on port'+ config.PORT))