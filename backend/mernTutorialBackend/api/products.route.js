import express from "express"
import ProductsCtrl from "./products.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/").get(ProductsCtrl.apiGetProducts)
router.route("/id/:id").get(ProductsCtrl.apiGetProductById)
router.route("/categories").get(ProductsCtrl.apiGetProductCategories)

router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview)

export default router