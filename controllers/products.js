import Product from "../models/product.js";

const isCategory = (categoryQueries, searchQuery) => {
    if (
        categoryQueries.includes(searchQuery) || 
        categoryQueries.includes(searchQuery.concat("s")) ||
        categoryQueries.includes(searchQuery.toLowerCase()) ||
        categoryQueries.includes(searchQuery.toLowerCase().concat("s"))
    ) {
        return true;
    } else {
        return false;
    }
}

const parseQueryToCtg = (categoryQueries, searchQuery) => {
    if (categoryQueries.includes(searchQuery)) {
        return searchQuery;
    } else if (categoryQueries.includes(searchQuery.concat("s"))) {
        return searchQuery.concat("s")
    } else if (categoryQueries.includes(searchQuery.toLowerCase())) {
        return searchQuery.toLowerCase();
    } else if (categoryQueries.includes(searchQuery.toLowerCase().concat("s"))) {
        return searchQuery.toLowerCase().concat("s")
    } else {
        return searchQuery;
    }
}

export default class ProductsController {
    static async purchaseCart(req, res, next) {
        try {
            const { items } = req.body;
            for (let i = 0; i < items.length; i++) {
                console.log(req.body);
                console.log(items[i]);
                const product = await Product.findById(items[i].productData._id)
                if (product.stock >= items[i].qty) {
                    await Product.findByIdAndUpdate(items[i].productData._id, { $inc: { stock: (items[i].qty * -1) } } );
                }
            }
            res.status(200);
        } catch (e) {
            console.log(e)
        }
    }

    static async getProductsBySearch(req, res, next) {
        console.log("getProductsBySearch called")
        let searchQuery = req.params.searchquery;
        const sortByQuery = req.params.sortby;
        const categoryQueries = ["laptops", "desktops", "phones", "keyboards", "headsets", "speakers", "tablets", "consoles"];
        let productList;

        if (sortByQuery) {
            if (isCategory(categoryQueries, searchQuery)) 
        {
            searchQuery = parseQueryToCtg(categoryQueries, searchQuery);
            try {
                switch (sortByQuery) {
                    case "priceAsc": productList = await Product.find({ category: searchQuery }).sort({price: 1})
                        break;
                    case "priceDesc": productList = await Product.find({ category: searchQuery }).sort({price: -1})
                        break;
                    case "shippingAsc": productList = await Product.find({ category: searchQuery }).sort({shippingCost: 1})
                        break;
                    default: productList = await Product.find({ category: searchQuery }).sort({price: 1})
                        break;
                }
                res.json({ products: productList });
            } catch (e) {
                console.log(e);
            }

        } else {

            try {
                switch (sortByQuery) {
                    case "priceAsc": productList = await Product.find({ "name": { "$regex": searchQuery, "$options": "i" } }).sort({price: 1})
                        break;
                    case "priceDesc": productList = await Product.find({ "name": { "$regex": searchQuery, "$options": "i" } }).sort({price: -1})
                        break;
                    case "shippingAsc": productList = await Product.find({ "name": { "$regex": searchQuery, "$options": "i" } }).sort({shippingCost: 1})
                        break;
                    default: productList = await Product.find({ "name": { "$regex": searchQuery, "$options": "i" } }).sort({price: 1})
                        break;
                }
                res.json({ products: productList });
            } catch (e) {
                console.log(e);
            }
        }
        } else if (!sortByQuery) {
            if (isCategory(categoryQueries, searchQuery)) 
        {
            searchQuery = parseQueryToCtg(categoryQueries, searchQuery);
            productList = await Product.find({ "category": searchQuery })
            res.json({ products: productList });
        } else {
            productList = await Product.find({ "name": { "$regex": searchQuery, "$options": "i" } })
            res.json({ products: productList });
            }
        }
    }

    static async getProducts(req, res, next) {
        const sortByQuery = req.params.sortby;
        if (sortByQuery) {
            try {
                const reqCategory = req.params.category;
                let productList;
                switch (sortByQuery) {
                    case "priceAsc": productList = await Product.find({ category: reqCategory }).sort({price: 1})
                        break;
                    case "priceDesc": productList = await Product.find({ category: reqCategory }).sort({price: -1})
                        break;
                    case "shippingAsc": productList = await Product.find({ category: reqCategory }).sort({shippingCost: 1})
                        break;
                    default: productList = await Product.find({ category: reqCategory }).sort({price: 1})
                        break;
                }
                res.json({ products: productList });
            } catch (e) {
                console.log(e);
            }

        } else if (!sortByQuery) {
            try {
                const reqCategory = req.params.category;
                const productList = await Product.find({ category: reqCategory });
                res.json({ products: productList });
            } catch (e) {
                console.log(e);
            }
        }
    }

    static async getProduct(req, res, next) {
        try {
            const { productid } = req.params;
            const product = await Product.findOne({ _id: productid}).populate({
                path: "reviews"
            });
            res.json({ product: product })
        } catch (e) {
            console.log(e);
        }
    }
}