import Product from "../models/product.js";
import Review from "../models/review.js";
import User from "../models/user.js";

export default class ReviewsController {
    static async postReview(req, res, next) {
        const product = await Product.findById(req.params.productid);
        const review = new Review(req.body);
        const user = await User.findOne({ email: req.user.email });
        review.author = user.username;
        console.log(review.author);
        product.reviews.push(review._id);
        await review.save();
        await product.save();
        res.json({
            flashMessage: "Review successfully posted",
            flashType: "success"
        });
        res.status(201);
    }
    static async deleteReview(req, res, next) {
        const { productid, reviewid } = req.params;
        console.log("deleteReview() ran");
        console.log(`productid: ${productid}, reviewid: ${reviewid}`)
        await Product.findByIdAndUpdate(productid, { $pull: { reviews: reviewid } } );
        await Review.findByIdAndDelete(reviewid);
        res.status(200);
    }
}