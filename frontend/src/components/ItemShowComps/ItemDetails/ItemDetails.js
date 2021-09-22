import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { setResponsiveClassName, timeConverter } from "../../../utility/utilityFunctions";

import classes from "./ItemDetails.module.css";

const ItemDetails = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [redirect, setRedirect] = useState("");

    const user = useSelector(state => state.user);
    const screenSize = useSelector(state => state.screenSize);

    const dispatch = useDispatch();

    const onQtyChange = (e) => {
        setQuantity(e.target.value)
    }

    const onSetRedirect = () => {
        setRedirect(<Redirect to="/checkout"/>)
    }

    

    const onAddToCart = (isBuyItNow) => { /* This should totally be switch case but I can't be bothered to rewrite it */
        if (quantity <= 0) {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: `Please enter a quantity greater than 0`,
                    flashType: "error" 
                }
            })
        } else if (quantity > props.productData.stock && user.token) {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: `Sorry, we only have ${props.productData.stock} of those in stock`,
                    flashType: "error" 
                }
            })
        } else if (!user.token) {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: "You must be logged in to add items to your cart",
                    flashType: "error"
                }
            })
        } else if (quantity <= props.productData.stock && user.token) {
            if (isBuyItNow === true) {
                onSetRedirect();
            }
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
        <div className={setResponsiveClassName(classes, screenSize, "ItemDetails")}>
            <div className={classes.ItemName}>{props.productData.name}</div>
                <div className={classes.Quantity}>
                    <label className={classes.QtyLabel} htmlFor="qty">Quantity:</label>
                    <input className={classes.QtyInput} type="number" min="0" defaultValue={1} id="qty" onChange={onQtyChange}/>
                </div>
                <div className={setResponsiveClassName(classes, screenSize, "BuySection")}>
                    <div className={classes.Price}>
                        Price: <span className={classes.PriceNum}>${props.productData.price}</span>
                    </div>
                    <button className={setResponsiveClassName(classes, screenSize, "BuyItNowBtn")} 
                        onClick={() => {onAddToCart(true)}}>
                            Buy It Now
                        </button>
                    <button className={setResponsiveClassName(classes, screenSize, "AddToCartBtn")} 
                    onClick={onAddToCart}>
                        Add to Cart
                    </button>
                </div>
                <div className={setResponsiveClassName(classes, screenSize, "Shipping")}>
                    Shipping: ${props.productData.shippingCost}
                </div>
                <div className={setResponsiveClassName(classes, screenSize, "Delivery")}>
                    Delivery: Between&nbsp;
                    <span className={classes.DeliveryDate}>{timeConverter(2)}</span> 
                    &nbsp;and&nbsp; 
                    <span className={classes.DeliveryDate}>{timeConverter(7)}</span>
                </div>
                <div className={classes.Description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                {redirect}
        </div>
    )
}

export default ItemDetails;