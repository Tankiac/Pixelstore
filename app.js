import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import path from "path"
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import User from "./models/user.js";
import productRoutes from "./routes/products.js";
import userRoutes from "./routes/users.js";
import reviewRoutes from "./routes/reviews.js";
import bodyParser from "body-parser";
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";
const JWTstrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const localStrategy = passportLocal.Strategy;

dotenv.config();

mongoose.connect(process.env.PIXELSTORE_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
mongoose.Promise = global.Promise;

passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
      session: false
    },
    async (req, email, password, done) => {
      try {
        const username = req.body.username
        const user = await User.create({ email, password, username });

        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
new JWTstrategy(
  {
    secretOrKey: process.env.SECRET || "supersecretsecret",
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
  },
  async (token, done) => {
    try {
      return done(null, token.user);
    } catch (error) {
      done(error);
    }
  }
)
);

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mongoSanitize({
    replaceWith: "_"
}))

app.use(passport.initialize());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/reviews", reviewRoutes);

if(process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  })
}


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
});