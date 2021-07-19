import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Flash.module.css";

const Flash = (props) => {
    const flashMessage = useSelector(state => state.flashMessage);
    const flashType = useSelector(state => state.flashType);

    const dispatch = useDispatch();

    useEffect(() => {
        if (flashMessage !== "") {
            setTimeout(() => {
                dispatch({
                    type: "flash", 
                    payload: {
                        flashMessage: "",
                        flashType: ""
                    }})
            }, 2000)
        }
    }, [flashMessage])

    return (
        <div>
            {flashMessage !== "" &&
            <div className={classes.Flash}>
                <div 
                    className="alert alert-danger alert-dismissible fade show" 
                    role="alert" 
                    style={{position: "relative", left: "-50%", backgroundColor: flashType === "error" ? "#FF8888" : "#39DB80"}}
                >
                    {flashMessage}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            }   
        </div>
    )
}

export default Flash;