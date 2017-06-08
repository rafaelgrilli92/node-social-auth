'use strict'

const router = require('express').Router();

const passport = require('passport');
const passportService = require('../services/passport');

// Authentications
const FacebookAuth = passport.authenticate('facebook',  { session: false });
const GoogleAuth = passport.authenticate('google', { session: false, scope: ['profile'] });

router.get('/facebook', FacebookAuth);
router.get('/facebook/callback', FacebookAuth, function(req, res) {
    res.send({ user: req.user })
});

router.get('/google', GoogleAuth);
router.get('/google/callback', GoogleAuth, function(req, res) {
    console.log(req)
    res.send({ user: req.user })
});

module.exports = router;