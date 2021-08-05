import { createStore } from "redux";

const addToCart = (cart, product) => {
    let updatedCart = JSON.parse(JSON.stringify(cart));
    updatedCart.push(product);
    return updatedCart;
}

const mainReducer = (state = 
    { 
        flashMessage: "", 
        flashType: "", 
        user: {}, 
        payMethod: "visa", 
        cart: [], 
        sortBy: "",
        resultBar: { content: "", showing: ""},
        screenSize: "large"
    }, action ) => {
    switch (action.type) {
        case "flash": return { ...state, flashMessage: action.payload.flashMessage, flashType: action.payload.flashType } || state;
        case "setUser": return { ...state, user: action.payload.user } || state;
        case "setPayMethod": return { ...state, payMethod: action.payload.payMethod } || state;
        case "setCartState": return { ...state, cart: addToCart(state.cart, action.payload.product) } || state;
        case "clearCart": return { ...state, cart: [] } || state;
        case "setSortBy": return { ...state, sortBy: action.payload.sortBy } || state;
        case "setSearchQuery": return { ...state, searchQuery: action.payload.searchQuery } || state;
        case "setResultBar": return { ...state, resultBar: action.payload.resultBar } || state;
        case "setScreenSize": return { ...state, screenSize: action.payload.screenSize } || state;
        default: return state;
    }
};

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;