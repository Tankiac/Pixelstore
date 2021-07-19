import React from "react";
import { Link } from "react-router-dom";

import classes from "./LogInButton.module.css";

const LogInButton = (props) => {
    return (
        <Link to="/login">
            <button className={classes.LogInButton}>Log In</button>
        </Link> 
    )
}

export default LogInButton;