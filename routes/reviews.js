import express from "express";
import { validateReview, isReviewAuthor } from "../middleware.js";
import ReviewsController from "../controllers/reviews.js";
import catchAsync from "../utils/catchAsync.js";
import passport from "passport";
const router = express.Router();

router.post("/:productid", passport.authenticate('jwt', { session: false }), catchAsync(ReviewsController.postReview))

router.delete("/:productid/:reviewid", catchAsync(ReviewsController.deleteReview))

export default router;