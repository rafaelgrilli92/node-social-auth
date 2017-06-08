'use strict'

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config');

// Create Facebook Strategy
const facebookStrategy = new FacebookStrategy(config.facebook,
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
);

// Create Google Strategy
const googleStrategy = new GoogleStrategy(config.google,
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    return done(null, profile);
  }
);

// Tell passport to use these Strategies
passport.use(facebookStrategy);
passport.use(googleStrategy);