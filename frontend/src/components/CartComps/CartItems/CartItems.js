import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem/CartItem";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
    const cartData = useSelector(state => state.cart)

    if (cartData.length) {
        return (
            <div className={classes.CartItems}>
                {cartData.map((product, index) => {
                    return <CartItem productData={product.productData} qty={product.qty} key={index}/>
                })}
            </div>
        )
    } else if (!cartData.length) {
        return (
            <div className={classes.CartItems}>
                <div className={classes.NoProducts}>
                    You have no products in your cart
                </div>
            </div>
            
        )
    }
}

export default CartItems;