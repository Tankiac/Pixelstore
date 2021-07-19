import React from "react";
import { Link } from "react-router-dom";

import classes from "./SignInButton.module.css";

const SignInButton = (props) => {
    return (
        <Link to="/signin">
            <button className={classes.SignInButton}>Sign In</button>
        </Link>
    )
}

export default SignInButton;