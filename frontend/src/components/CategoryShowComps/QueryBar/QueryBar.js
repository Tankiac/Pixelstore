import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./QueryBar.module.css";

const QueryBar = (props) => {
    const screenSize = useSelector(state => state.screenSize);
    const sortBy = useSelector(state => state.sortBy);

    const dispatch = useDispatch();

    const onRadioSort = (sortArg) => {
        dispatch({
            type: "setSortBy",
            payload: {
                sortBy: sortArg
            }
        })
    }

    const priceAscRef = useRef();
    const priceDescRef = useRef();
    const shippingAscRef = useRef();

    useEffect(() => {
        if (sortBy === "") {
            priceAscRef.current.checked = false;
            priceDescRef.current.checked = false;
            shippingAscRef.current.checked = false;
        }
    }, [sortBy])

        return (
            <div className={classes.QueryBar}>
                <div>Sort by:</div>
                <div className={classes.RadioButtons}>
                    <div>
                        <input 
                            className={classes.RadioBtn} 
                            ref={priceAscRef} 
                            type="radio" 
                            id="priceAsc" 
                            name="sortRadio" 
                            onChange={() => onRadioSort("priceAsc")}/>
                        <label className={classes.RadioLabel} htmlFor="priceAsc">Least expensive</label>
                    </div>
                    <div>
                        <input 
                            className={classes.RadioBtn} 
                            ref={priceDescRef} 
                            type="radio" 
                            id="priceDesc" 
                            name="sortRadio" 
                            onChange={() => onRadioSort("priceDesc")}/>
                        <label className={classes.RadioLabel} htmlFor="priceDesc">Most expensive</label>
                    </div>
                    <div>
                        <input 
                            className={classes.RadioBtn} 
                            ref={shippingAscRef} 
                            type="radio" 
                            id="shippingAsc" 
                            name="sortRadio" 
                            onChange={() => onRadioSort("shippingAsc")}/>
                        <label className={classes.RadioLabel} htmlFor="shippingAsc">Cheapest shipping</label>
                    </div>
                </div>
            </div>
        )
    }
    


export default QueryBar;