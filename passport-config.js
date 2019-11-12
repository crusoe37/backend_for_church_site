const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const container = require('./di');

passport.serializeUser(function(user, done) {
  done(null, user.id);
})

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  })
  done(null, user);

})

passport.use(new LocalStrategy(
  function(username, password, done) {
    
  }
))