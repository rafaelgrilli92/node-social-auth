'use strict'

const Authentications = require('./auth'); 

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect('/auth/facebook')
    });
    
    app.use('/auth', Authentications);
}