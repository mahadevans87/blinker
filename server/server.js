const express = require('express')
//Import the mongoose module
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const authController = require('./controllers/auth')

const app = express();
const port = 3000;


//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/blinker';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => res.send('blinker'));

var router = express.Router();

authController.setupGoogleAuth();

app.listen(port, () => console.log(`Blinking on port ${port}...`));
