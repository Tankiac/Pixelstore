import http from "../http-common";

export default class StoreDataService {
    static async getProductsByCategory(category = "laptops", sortBy = "") {
        console.log(`getProductsByCategory called, category: ${category}`)
        if (sortBy) {
            return http.get(`/products/category/${category}/${sortBy}`);
        } else if (sortBy === "") {
            return http.get(`/products/category/${category}`);
        }
    }
    static async getProductsBySearch(searchQuery, sortBy) {
        if (sortBy) {
            return http.get(`/products/search/${searchQuery}/${sortBy}`)
        } else if (sortBy === "") {
            return http.get(`/products/search/${searchQuery}`)
        }
    }
    static async getProductById(id) {
        return http.get(`/products/${id}`);
    }
    static async postReview(review, productid, token) {
        return http.post(`/reviews/${productid}`, review, { params: { secret_token: token } });
    }
    static async register(userData) {
        return http.post(`/users/register`, userData);
    }
    static async login(userData) {
        return http.post(`/users/login`, userData);
    }
    static async buyCart(cartData) {
        return http.put(`/products/cart/buy`, cartData);
    }
}