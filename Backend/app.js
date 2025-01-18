require('dotenv').config();
const mongooseConnection  = require('./App/Connection/mongooseConnection')
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
require('./App/Routes')(app);



console.log('process.env.PORT', process.env.PORT);
server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
     
});