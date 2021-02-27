const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json({extend:false}));
app.get('/', function(req, res, next) {
    res.json({message: 'alive'});
  });
app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));

module.exports = app;