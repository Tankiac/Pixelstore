import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./CtgCard.module.css"

const CtgCard = (props) => {
    const dispatch = useDispatch();

    const onClickCtg = () => {
        dispatch({
            type: "setResultBar",
            payload: {
                resultBar: {
                    content: props.title,
                    showing: "category"
                }
            }
        })
    }

    return (
        <div className={classes.CtgCard}>
            <Link to={`/categoryshow/${props.category}`}>
                <div className={classes.Title} onClick={onClickCtg}>{props.title}</div>
            </Link>
            <Link to={`/categoryshow/${props.category}`}>
                <img className={classes.Image} src={props.imgURL} onClick={onClickCtg}></img>
            </Link>
            <Link to={`/categoryshow/${props.category}`}>
                <div className={classes.SeeMore} onClick={onClickCtg}>Browse &gt;</div>
            </Link>
        </div>
    )
}

export default CtgCard;