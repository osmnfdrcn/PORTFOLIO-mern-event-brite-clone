const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require('../models/User.js')

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/api/v1/users/auth/google/callback",
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        if (profile) {
          const existingUser = await User.findOne({ email: profile?.emails[0]?.value })
          if (existingUser) {
            await existingUser.generateAuthToken('register')
            done(null, existingUser)
          }
          const newUser = await User.create({
            email: profile.emails[0].value,
            lastName: profile.name.familyName,
            firstName: profile.name.givenName,
            googleId: profile.id,
            password: profile.id,
          })
          console.log('user');
          newUser.status = 'Active'
          await newUser.generateAuthToken('register')
          await newUser.save()
          done(null, newUser)
        }

      } catch (error) { }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);

});