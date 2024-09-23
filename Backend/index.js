require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose"); // Ensure you import mongoose
require("./db/conn");

const userdb = require("./model/userSchema");

const PORT = process.env.PORT || 8000;

const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;

app.use(
  cors({
    origin: "https://consultiva.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || "12345678",
    resave: false,
    saveUninitialized: true,
  })
);

// Setup Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://consultivaapi.vercel.app/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await userdb.findOne({ googleId: profile.id });

        if (!user) {
          user = new userdb({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });

          await user.save();
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Check connection and port
app.get("/check", (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.status(200).json({
      message: "Database connected",
      port: PORT,
    });
  } else {
    res.status(500).json({
      message: "Database not connected",
    });
  }
});


// Initial Google OAuth login
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "https://consultiva.vercel.app/dashboard",
    failureRedirect: "https://consultiva.vercel.app/login",
  })
);

app.get("/login/success", async (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "User Login", user: req.user });
  } else {
    res.status(400).json({ message: "Not Authorized" });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("https://consultiva.vercel.app");
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
