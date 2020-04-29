// npm packages that i want to import
const express = require('express');
require('dotenv').config();
const db = require('./config/database');

// constants from my settings file
let {
    PORT,
    APPNAME,
    DBURI
} = require('./config/settings');

const app = express();
db();

app.listen(PORT, () => {
    console.log(`${APPNAME} is listening on port ${PORT}...`);
});