const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connection = mongoose.connect(process.env.CONNECTIONSTRING)
           .then(() => console.log('connection to db established'))
           .catch((err) => console.log('error connect to db', err));


module.exports = connection;