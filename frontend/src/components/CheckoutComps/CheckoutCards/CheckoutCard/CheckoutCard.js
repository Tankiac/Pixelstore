import React from "react";
import { useSelector } from "react-redux";
import { setResponsiveClassName, timeConverter } from "../../../../utility/utilityFunctions";

import classes from "./CheckoutCard.module.css";

const CheckoutCard = (props) => {
    const screenSize = useSelector(state => state.screenSize)



    return (
        <div className={setResponsiveClassName(classes, screenSize, "CheckoutCard")}>
            <div className={classes.CardTitle}>Review item and shipping</div>
                <img className={classes.ItemImg} src={props.productData.pictures[0]}/>
                <div className={setResponsiveClassName(classes, screenSize, "DetailsContainer")}>
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