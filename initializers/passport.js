import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/User';

// TODO: learn what this does
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

export default passport;