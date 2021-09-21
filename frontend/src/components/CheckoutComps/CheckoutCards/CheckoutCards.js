import React from "react";
import { useSelector } from "react-redux";
import { setResponsiveClassName } from "../../../utility/utilityFunctions"

import CheckoutCard from "./CheckoutCard/CheckoutCard";
import classes from "./CheckoutCards.module.css";

const CheckoutCards = (props) => {
    const cartData = useSelector(state => state.cart);
    const screenSize = useSelector(state => state.screenSize);

    if (cartData.length) {
        return (
            <div className={classes.CheckoutCards}>
                {cartData.map((product, index) => {
                    return <CheckoutCard productData={product.productData} qty={product.qty} key={index}/>
                })}
            </div>
        )
    } else if (!cartData.length) {
        return (
            <div className={classes.CheckoutCards}>
                <div className={setResponsiveClassName(classes, screenSize, "NoProducts")}>
                    You have no products in your cart
                </div>
            </div>
            
        )
    }
}

export default CheckoutCards;