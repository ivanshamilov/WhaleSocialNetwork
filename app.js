const express = require('express');
const mongoose = require('mongoose');
const HttpError = require('./util/http-error');

const {MONGODB_NAME, MONGODB_USER, MONGODB_PASSWORD} = require('./util/constants');

const bodyParser = require('body-parser');

const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0-kinxl.mongodb.net/${MONGODB_NAME}`;

const authRoutes = require('./routes/auth-routes');
const userRoutes = require('./routes/user-routes');

const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    if(req.method === 'OPTIONS') {
        return res.sendStatus(200);
    };
    next();
});



app.use('/auth', authRoutes);
app.use(userRoutes)





app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
});

app.use((error, req, res, next) => {

   if(res.headerSent){
       return next(error);
   }

   res.status(error.code || 500)
       .json({
           message: error.message || 'An unknown error occurred'
       })

});

mongoose.connect(MONGODB_URI)
        .then(res => {
            console.log("Connection to the database was established. Magic happens on port 8000");
            app.listen(8000);
        })
        .catch(err => console.log(err));

