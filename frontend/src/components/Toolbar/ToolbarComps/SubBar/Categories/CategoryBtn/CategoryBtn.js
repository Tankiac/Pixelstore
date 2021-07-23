import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./CategoryBtn.module.css"

const CategoryBtn = (props) => {
    const [btnTextClass, setBtnTextClass] = useState([classes.BtnText])

    const dispatch = useDispatch();

    let { categoryid } = useParams();

    const onClickCategory = () => {
        console.log(props.selected)
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
    
    useEffect(() => {
        if (props.name.toLowerCase() === categoryid) {
            setBtnTextClass(classes.Selected);
        } else if (props.name.toLowerCase() !== categoryid) {
            setBtnTextClass(classes.BtnText);
        }

    }, [categoryid])
    
    return (
        <div className={classes.CategoryBtn}>
            <Link 
                className={btnTextClass} 
                to={`/categoryshow/${props.name.toLowerCase()}`}
                onClick={onClickCategory}
                >{props.name}
            </Link>
        </div>
    )
}

export default CategoryBtn;