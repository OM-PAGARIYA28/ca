import express from 'express';
import bd from 'body-parser';
import hbs from 'hbs';
import mongoose from 'mongoose';
import {routes} from './routes/main.js';

const app = express();
const port = 3030;

// Body Parser setup --> Middleware
app.use(bd.urlencoded({extended: true}));

// public folder setup --> Static Files
app.use('/static', express.static("public"));

// Routes setup --> Paths
app.use('', routes);

// hbs setup --> Template Engine
app.set('view engine', 'hbs');

// Views setup --> Pages
app.set('views', 'views');
hbs.registerPartials("views/partials");

app.listen(port, ()=>{
    console.log(`Server Started on port ${port}`);
});