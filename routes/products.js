import express from "express";
import ProductsController from "../controllers/products.js";
import catchAsync from "../utils/catchAsync.js";
const router = express.Router();

router.put("/cart/buy", catchAsync(ProductsController.purchaseCart));

router.get("/search/:searchquery", catchAsync(ProductsController.getProductsBySearch));

router.get("/search/:searchquery/:sortby", catchAsync(ProductsController.getProductsBySearch));

router.get("/category/:category", catchAsync(ProductsController.getProducts));

router.get("/category/:category/:sortby", catchAsync(ProductsController.getProducts));

router.get("/:productid", catchAsync(ProductsController.getProduct));

export default router;