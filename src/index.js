const express = require("express");
const mongoose = require('mongoose');
const keys = require('../config/keys');

require('../services/passport');


mongoose.connect(keys.mongoURI);

const app = express();


require('../routes/authRoutes')(app);

//détermine le port, en dev le port peut être vide donc par défaut 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started');
});