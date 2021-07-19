import mongoose from "mongoose"
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    stock: Number,
    shippingCost: Number,
    price: Number,
    category: String,
    pictures: [
        {
            type: String
        }   
    ],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

const Product = mongoose.model("Product", ProductSchema)

export default Product;