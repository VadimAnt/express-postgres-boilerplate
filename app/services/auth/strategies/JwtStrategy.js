const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { UserModel } = require('../../../models');
const config = require('../../../../boot/boot.config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('jwt'),
  secretOrKey: config.app.jwtKey,
};

module.exports = new JwtStrategy(options, async (payload, done) => {
  try {
    const user = await UserModel.findById(payload.id);

    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    return done(error, null);
  }
});
