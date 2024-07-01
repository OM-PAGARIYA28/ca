import express from 'express';
const routes = express.Router();

routes.get('/', (req, res)=>{
    console.log("Home Page");
    res.render('index');
});

routes.get('/career', (req, res)=>{
    console.log("Career Page");
    res.render('careers');
});

routes.get('/about', (req, res)=>{
    console.log("About Page");
    res.render('about');
});

routes.get('/services', (req, res)=>{
    console.log("Service Page");
    res.render('services');
});

routes.get('/contact', (req, res)=>{
    console.log("Contact Page");
    res.render('contact');
});

export {routes};