import ProductsDAO from "../dao/productsDAO.js"

export default class ProductsController {
  static async apiGetProducts(req, res, next) {
    const productsPerPage = req.query.productsPerPage ? parseInt(req.query.productsPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}
    if (req.query.cuisine) {
      filters.cuisine = req.query.cuisine
    } else if (req.query.zipcode) {
      filters.zipcode = req.query.zipcode
    } else if (req.query.name) {
      filters.name = req.query.name
    }

    const { productsList, totalNumProducts } = await ProductsDAO.getProducts({
      filters,
      page,
      productsPerPage,
    })

    let response = {
      products: productsList,
      page: page,
      filters: filters,
      entries_per_page: productsPerPage,
      total_results: totalNumProducts,
    }
    res.json(response)
  }
  static async apiGetProductById(req, res, next) {
    try {
      let id = req.params.id || {}
      let product = await ProductsDAO.getProductByID(id)
      if (!product) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(product)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

  static async apiGetProductCategories(req, res, next) {
    try {
      let categories = await ProductsDAO.getCategories()
      res.json(categories)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }
}