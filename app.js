//bringing in all the dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors =  require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to mongodb database
mongoose.connect(config.database);

// see if connection is active
mongoose.connection.on('connected', function() {
    console.log('Connected to database '+ config.database);
});

// see if there is an error
mongoose.connection.on('error', function(err) {
    console.log('Database error: '+ err);
});

//initializing app variable with express
const app = express();

//for the routes
const users = require('./routes/users');
const quote = require('./routes/quote');

//setting port 3000 for local
const port = process.env.PORT || 8080;
//const port = 3000;

//enable cors so the backend accepts request from other domains (in case backend and frontend run on a different port for instance)
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//use /users for all user routes
app.use('/users', users);

//use /quote for all quote routes
app.use('/quote', quote)

//one route to home page
app.get('/', function(req, res) {
    res.send('Invalid endpoint.');
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//listen function to get port and start the server
app.listen(port, function() {
    console.log("info", 'The server started on port '+port);
});