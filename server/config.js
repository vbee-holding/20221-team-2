const dotenv = require('dotenv');
dotenv.config();

const config = {
    PORT: process.env.PORT || 5005,
    MONGODB_URL: process.env.mongoUri
}
module.exports = config;

//mongodb+srv://root:root@danhsachsv.pkz9zbq.mongodb.net/node_react_forum
//mongodb+srv://root:root@cluster0.ih5ph7s.mongodb.net/WorlCup2022