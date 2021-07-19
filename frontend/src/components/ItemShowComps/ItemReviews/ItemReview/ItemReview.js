import React from "react";


import classes from "./ItemReview.module.css";

const ItemReview = (props) => {

    let ratingStars = "";
    switch (props.rating) {
        case 1: ratingStars = "★☆☆☆☆";
        break;
        case 2: ratingStars = "★★☆☆☆";
        break;
        case 3: ratingStars = "★★★☆☆";
        break;
        case 4: ratingStars = "★★★★☆";
        break;
        case 5: ratingStars = "★★★★★";
        break;
        default: ratingStars = "★★★★★";
        break;
    }

    return (
        <div className={classes.ItemReview}>
            <div className={classes.AuthorName}>By: {props.author}</div>
            <div className={classes.ReviewTitle}>{ratingStars} {props.title}</div>
            <div className={classes.ReviewText}>{props.text}</div>
        </div>
    )
}

export default ItemReview;