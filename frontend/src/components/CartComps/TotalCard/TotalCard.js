import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./TotalCard.module.css";

const TotalCard = (props) => {
    const cartData = useSelector(state => state.cart);
    const [subtotal, setSubtotal] = useState(0);
    const [shippingTotal, setShippingTotal] = useState(0);

    const calcSubtotal = () => {
        let subtotalAccumulator = 0;
        let shippingTotalAccumulator = 0;
        cartData.forEach(item => {
            subtotalAccumulator += (item.productData.price * item.qty);
            shippingTotalAccumulator += item.productData.shippingCost;
        })
        setSubtotal(subtotalAccumulator);
        setShippingTotal(shippingTotalAccumulator);
    };

    useEffect(() => {
        calcSubtotal();
    }, [cartData]);

    return (
        <div className={classes.TotalCard}>
            <div className={classes.PriceContainer}>
                <div className={classes.SubtotalText}>Subtotal</div>
                <div className={classes.ShippingText}>Shipping</div>
                <div className={classes.SubtotalPrice}>${subtotal}.00</div>
                <div className={classes.ShippingPrice}>${shippingTotal}.00</div>
            </div>
            <div className={classes.OrderTotalContainer}>
                <div className={classes.OrderTotalText}>Order total</div>
                <div className={classes.OrderTotalPrice}>${subtotal + shippingTotal}.00</div>
            </div>
            <Link to="/checkout">
                <button className={classes.BuyBtn}>Go To Checkout</button>
            </Link>
        </div>
    )
}

export default TotalCard;