import express from "express";
import passport from "passport";
import UsersController from "../controllers/users.js";
import catchAsync from "../utils/catchAsync.js";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post(
    "/register", 
        passport.authenticate('signup', { session: false }),
            async (req, res, next) => {
                res.json({
                    message: 'Registered successfully',
                    flashType: "success",
                    user: req.user
                });
            }
        );

router.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');
            res.json({ flashMessage: "Incorrect email or password", flashType: "error"})
            return next(error);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, process.env.SECRET);

              let resUser = JSON.parse(JSON.stringify(user));
              delete resUser.password

              return res.json({ token, user: resUser, flashMessage: "Successfully logged in", flashType: "success" });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

export default router;
