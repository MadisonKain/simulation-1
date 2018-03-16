const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const port = 3005;

const app = express();
app.use(bodyParser.json());

massive( process.env.DATABASE_URI).then( db => {
        console.log( 'Connected to Database!' );
        app.set('db', db)
    });


app.listen(port, () => console.log(`Searching for Rebel Scum on port ${port}`));