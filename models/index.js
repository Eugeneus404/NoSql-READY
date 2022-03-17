const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const keys = require('../config/keys')
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

mongoose.connect(keys.mongoURI);
 .then(() => condole.log('Успех!'))
 .catch(error => console.log(error))
