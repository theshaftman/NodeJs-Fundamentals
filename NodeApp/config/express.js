const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

module.exports = {
    configApp(app) {
        // View engine setup.
        app.set('views', './views');
    
        // set the view engine to ejs
        app.set('view engine', 'ejs');
    
        // This set up which is the parser for the request's data.
        app.use(bodyParser.json());
    
        // This makes the content in the "public" folder accessible for every user.
        app.use(express.static('./public'));
        return app;
    }
}