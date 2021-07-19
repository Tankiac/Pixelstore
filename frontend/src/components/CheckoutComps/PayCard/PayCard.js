import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import StoreDataService from "../../../services/store";

import classes from "./PayCard.module.css";

const PayCard = (props) => {
    const [subtotal, setSubtotal] = useState(0);
    const [shippingTotal, setShippingTotal] = useState(0);

    const currentPayMethod = useSelector(state => state.payMethod);
    const cartData = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const onBuy = () => {
        dispatch({
            type: "flash",
            payload: {
                flashMessage: "Your purchase was successful",
                flashType: "success"
            }
        });
        StoreDataService.buyCart(JSON.stringify({items: cartData}))
        dispatch({
            type: "clearCart"
        });
    }

    const capitalize = (word) => {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    }

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
        <div className={classes.PayCard}>
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
            <Link to="/home">
                <button className={classes.BuyBtn} onClick={onBuy}>Buy with {capitalize(currentPayMethod)}</button>
            </Link>
        </div>
    )
}

export default PayCard;