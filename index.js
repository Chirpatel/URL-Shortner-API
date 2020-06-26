const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json({extend:false}));

app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));