import mongoose from "mongoose"
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    title: String,
    text: String,
    rating: Number,
    author: String
});

const Review = mongoose.model("Review", ReviewSchema);

export default Review;