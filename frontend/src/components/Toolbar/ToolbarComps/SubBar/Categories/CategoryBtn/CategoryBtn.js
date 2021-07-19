import React from "react"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import classes from "./CategoryBtn.module.css"

const CategoryBtn = (props) => {
    const dispatch = useDispatch();

    const onClickCategory = () => {
        dispatch({
            type: "setSortBy",
            payload: {
                sortBy: ""
            }
        })
        dispatch({
            type: "setResultBar",
            payload: {
                resultBar: {
                    content: props.name,
                    showing: "category"
                }
            }
        })
    }

    return (
        <div className={classes.CategoryBtn}>
            <Link 
                className={classes.BtnText} 
                to={`/categoryshow/${props.name.toLowerCase()}`}
                onClick={onClickCategory}
                >{props.name}
            </Link>
        </div>
    )
}

export default CategoryBtn;