import React from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./PayMethod.module.css";

const PayMethod = (props) => {
    const currentPayMethod = useSelector(state => state.payMethod)

    const dispatch = useDispatch();

    const onChangePayMethod = (selectedPayMethod) => {
        dispatch({
            type: "setPayMethod",
            payload: {
                payMethod: selectedPayMethod
            }
        })
    }

    return (
        <div className={classes.PayMethod}>
            <div className={classes.CheckboxContainer}>
                <input 
                    type="checkbox" 
                    className={classes.Checkbox} 
                    checked={currentPayMethod === props.payMethod} 
                    onClick={() => onChangePayMethod(props.payMethod)}
                    onChange={null}/>
            </div>
            <div className={classes.ImgContainer}>
                <img src={props.payMethodImg} className={classes.PayMethodImg}/>
            </div>  
        </div>
    )
}

export default PayMethod;