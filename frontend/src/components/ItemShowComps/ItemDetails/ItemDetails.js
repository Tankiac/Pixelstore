import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

import classes from "./ItemDetails.module.css";

const ItemDetails = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [redirect, setRedirect] = useState("");

    const token = useSelector(state => state.user.token);

    const dispatch = useDispatch();

    const onQtyChange = (e) => {
        setQuantity(e.target.value)
    }

    const onSetRedirect = () => {
        setRedirect(<Redirect to="/checkout"/>)
    }

    const timeConverter = (offset = 0) => {
        let unix = new Date(Date.now());
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let month = months[unix.getMonth()];
        let date = unix.getDate();
        let time = `${month} ${date + offset}.`
        return time;
      }

    const onAddToCart = () => {
        if (quantity > props.productData.stock && token !== "") {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: `Sorry, we only have ${props.productData.stock} of those in stock`,
                    flashType: "error" 
                }
            })
        } else if (token === "") {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: "You must be logged in to add items to your cart",
                    flashType: "error"
                }
            })
        } else if (quantity <= props.productData.stock && token !== "") {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: `${props.productData.name} (${quantity}) added to cart`,
                    flashType: "success"
                }
            })
            dispatch({
                type: "setCartState",
                payload: {
                    product: {
                        productData: props.productData,
                        qty: quantity
                    }    
                }
            })
        }
    }

    return (
        <div className={classes.ItemDetails}>
            <div className={classes.ItemName}>{props.productData.name}</div>
                <div className={classes.Quantity}>
                    <label className={classes.QtyLabel} htmlFor="qty">Quantity:</label>
                    <input className={classes.QtyInput} type="number" defaultValue={1} id="qty" onChange={onQtyChange}/>
                </div>
                <div className={classes.BuySection}>
                    <div className={classes.Price}>
                        Price: <span className={classes.PriceNum}>${props.productData.price}</span>
                    </div>
                    <button className={classes.BuyItNowBtn} onClick={() => {onAddToCart(); onSetRedirect();}}>Buy It Now</button>
                    <button className={classes.AddToCartBtn} onClick={onAddToCart}>Add to Cart</button>
                </div>
                <div className={classes.Shipping}>
                    Shipping: ${props.productData.shippingCost}
                </div>
                <div className={classes.Delivery}>
                    Delivery: Between&nbsp;
                    <span className={classes.DeliveryDate}>{timeConverter(2)}</span> 
                    &nbsp;and&nbsp; 
                    <span className={classes.DeliveryDate}>{timeConverter(7)}</span>
                </div>
                <div className={classes.Description}>
                    <div className={classes.DescriptionText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                {redirect}
        </div>
    )
}

export default ItemDetails;