const passportJWT = require('passport-jwt')
const container = require('./di');

module.exports = (passport) => {
  let ExtractJwt = passportJWT.ExtractJwt;
  let JwtStrategy = passportJWT.Strategy;
  let jwtOptions = {};

  jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  jwtOptions.secretOrKey = 'wowwow';

  // Create strategy for web token
  passport.use(new JwtStrategy(jwtOptions, 
    function(jwt_payload, next) {
      console.log('payload received', jwt_payload);
      let user = container.UsersRepository.getUser({ id: jwt_payload.id });
      if (user) {
        next(null, user);
      } else {
        next(null, false);
      }
  }))
}