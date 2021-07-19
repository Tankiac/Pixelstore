import React from "react";
import { Link } from "react-router-dom";

import classes from "./ItemCard.module.css";

const ItemCard = (props) => {
    return (
        <div className={classes.ItemCard}>
            <Link to={`/itemshow/${props.productid}`}>
                <img className={classes.Image} src={props.pictureURL}/>
            </Link>
            <Link className={classes.ItemName} to={`/itemshow/${props.productid}`}>{props.name}</Link>
            <div className={classes.Price}>${props.price}</div>
            <div>{props.stock} in stock</div>
            <div>Shipping cost: ${props.shippingCost}</div>
        </div>
    )
}

export default ItemCard;