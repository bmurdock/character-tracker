// npm packages that i want to import
const express = require('express');
require('dotenv').config();


// import my database connection settings
const db = require('./config/database');

// initializing the connection to the database
db();


// import my route files
const characterRoutes = require('./api/routes/characters.routes');
const uiRoutes = require('./ui/routes/main.routes');

// get constants from my settings file
let {
    PORT,
    APPNAME
} = require('./config/settings');


// define the app
const app = express();
app.use(express.json());

// tell it to use ejs
app.set('view engine', 'ejs');

// create express router object for the project
const router = express.Router();
const uiRouter = express.Router();


// tell the app to use our api routes
app.use('/api', router);

characterRoutes(router);


// tell the app to use ui routes
app.use('/', uiRouter);
uiRoutes(uiRouter);


app.listen(PORT, () => {
    console.log(`${APPNAME} is listening on port ${PORT}...`);
});