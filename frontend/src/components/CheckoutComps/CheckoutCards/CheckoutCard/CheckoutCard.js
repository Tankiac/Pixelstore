import React from "react";

import classes from "./CheckoutCard.module.css";

const CheckoutCard = (props) => {
    const timeConverter = (offset = 0) => {
        let unix = new Date(Date.now());
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let month = months[unix.getMonth()];
        let date = unix.getDate();
        let time = `${month} ${date + offset}.`
        return time;
      }

    return (
        <div className={classes.CheckoutCard}>
            <div className={classes.CardTitle}>Review item and shipping</div>
                <img className={classes.ItemImg} src={props.productData.pictures[0]}/>
                <div className={classes.DetailsContainer}>
                    <div className={classes.ItemName}>{props.productData.name}</div>
                    <div className={classes.ItemPrice}>${props.productData.price}</div>
                    <div className={classes.ItemQty}>Quantity: {props.qty}</div>
                    <div className={classes.ShippingTitle}>Shipping</div>
                    <div className={classes.EstDelivery}>Estimated Delivery: {timeConverter(2)} - {timeConverter(7)}</div>
                    <div className={classes.ShippingPrice}>${props.productData.shippingCost}</div>
                </div> 
        </div>
    )
}

export default CheckoutCard;