console.log('first line of app...');
// npm packages that i want to import
const express = require('express');
require('dotenv').config();
console.log('imported the stuff');

// import my database connection settings
const db = require('./config/database');
console.log('required the db connection file');
// initializing the connection to the database
db();
console.log('started initializing the db');

// import my route files
const characterRoutes = require('./api/routes/characters.routes');
console.log('imported the routes');

// get constants from my settings file
let {
    PORT,
    APPNAME
} = require('./config/settings');
console.log('imported the settings');

// define the app
const app = express();
app.use(express.json());



// create express router object for the project
const router = express.Router();
console.log('created router');

// tell the app to use our routes
app.use('/api', router);
console.log('told app to use router.');
characterRoutes(router);
console.log('use character router');

app.listen(PORT, () => {
    console.log(`${APPNAME} is listening on port ${PORT}...`);
});