import React from "react";
import { useDispatch } from "react-redux";

import classes from "./LogOutButton.module.css";

const LogOutButton = (props) => {
    const dispatch = useDispatch();

    const logOutUser = () => {
        dispatch({
            type: "setUser",
            payload: { user: {} }
        })
    }

    return (
        <button 
            className={classes.LogOutButton}
            onClick={logOutUser}>
            Log Out
        </button>
    )
}

export default LogOutButton;