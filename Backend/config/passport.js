import passport from "passport";

import { Strategy as LocalStrategy } from "passport-local";

import bcrypt from "bcrypt";



import UserModel from "../models/UserModel.js";



passport.use(

  new LocalStrategy(async (username, password, done) => {

    try {

      const user = await UserModel.findOne({ username });



      if (!user) {

        return done(null, false, {

          message: "Invalid username",

        });

      }



      const isMatch = await bcrypt.compare(password, user.password);



      if (!isMatch) {

        return done(null, false, {

          message: "Invalid password",

        });

      }



      return done(null, user);

    } catch (error) {

      return done(error);

    }

  })

);



passport.serializeUser((user, done) => {

  done(null, user.id);

});



passport.deserializeUser(async (id, done) => {

  try {

    const user = await UserModel.findById(id);

    done(null, user);

  } catch (error) {

    done(error);

  }

});



export default passport