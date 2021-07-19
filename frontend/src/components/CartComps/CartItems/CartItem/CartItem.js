import React from "react";


import classes from "./CartItem.module.css";

const CartItem = (props) => {
    return (
        <div className={classes.CartItem}>
            <div className={classes.CardTitle}>Review item and shipping</div>
                <img className={classes.ItemImg} src={props.productData.pictures[0]}/>
                <div className={classes.DetailsContainer}>
                    <div className={classes.ItemName}>{props.productData.name}</div>
                    <div className={classes.ItemPrice}>${props.productData.price}</div>
                    <div className={classes.ItemQty}>Quantity: {props.qty}</div>
                    <div className={classes.ShippingTitle}>Shipping</div>
                    <div className={classes.EstDelivery}>Estimated Delivery: May 18th - May 24th</div>
                    <div className={classes.ShippingPrice}>${props.productData.shippingCost}</div>
                </div> 
        </div>
    )
}

export default CartItem;