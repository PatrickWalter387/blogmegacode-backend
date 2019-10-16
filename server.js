require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const url = "";

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


// mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

require('./src/models/Postagens');


//Rotas
app.use('/api', require('./src/routes'));



app.listen(process.env.PORT || 3001);