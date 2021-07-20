import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let products

export default class ProductsDAO {
  static async injectDB(conn) {
    if (products) {
      return
    }
    try {
      products = await conn.db(process.env.PIXELSTORE_NS).collection("products")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in productsDAO: ${e}`,
      )
    }
  }

  static async getProducts({
    filters = null,
    page = 0,
    productsPerPage = 20,
  } = {}) {
    let query
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } }
      } else if ("category" in filters) {
        query = { "category": { $eq: filters["category"] } }
      } else if ("zipcode" in filters) {
        query = { "address.zipcode": { $eq: filters["zipcode"] } }
      }
    }

    let cursor
    
    try {
      cursor = await products
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { productsList: [], totalNumProducts: 0 }
    }

    const displayCursor = cursor.limit(productsPerPage).skip(productsPerPage * page)

    try {
      const productsList = await displayCursor.toArray()
      const totalNumProducts = await products.countDocuments(query)

      return { productsList, totalNumProducts }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { productsList: [], totalNumProducts: 0 }
    }
  }
  static async getProductByID(id) {
    try {
      const pipeline = [
        {
            $match: {
                _id: new ObjectId(id),
            },
        },
              {
                  $lookup: {
                      from: "reviews",
                      let: {
                          id: "$_id",
                      },
                      pipeline: [
                          {
                              $match: {
                                  $expr: {
                                      $eq: ["$product_id", "$$id"],
                                  },
                              },
                          },
                          {
                              $sort: {
                                  date: -1,
                              },
                          },
                      ],
                      as: "reviews",
                  },
              },
              {
                  $addFields: {
                      reviews: "$reviews",
                  },
              },
          ]
      return await products.aggregate(pipeline).next()
    } catch (e) {
      console.error(`Something went wrong in getProductByID: ${e}`)
      throw e
    }
  }

  static async getCategories() {
    let categories = []
    try {
      categories = await products.distinct("category")
      return categories
    } catch (e) {
      console.error(`Unable to get categories, ${e}`)
      return categories
    }
  }
}



