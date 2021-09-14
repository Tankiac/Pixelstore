import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./CartIcon.module.css";
import cartIconPng from "../../../../assets/images/CartIcon.png";

const CartIcon = (props) => {
    const cartData = useSelector(state => state.cart)
    const screenSize = useSelector(state => state.screenSize)

    if (screenSize !== "extraSmall") { 
        return (
            <Link to="/cart" className={classes.CartContainer}>
                <div className={classes.CartIcon}>
                    <img src={cartIconPng}></img>
                </div>
                <div className={classes.CartNumber}>{cartData.length}</div>
            </Link>
    )} else { 
        return null 
    }
}

export default CartIcon;
