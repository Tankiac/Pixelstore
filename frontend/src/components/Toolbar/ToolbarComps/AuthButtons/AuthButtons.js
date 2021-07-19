import React from "react";

import classes from "./AuthButtons.module.css";
import SignInButton from "./SignInButton/SignInButton";
import LogInButton from "./LogInButton/LogInButton";
import LogOutButton from "./LogOutButton/LogOutButton";

const AuthButtons = ( props ) => {
    if (props.loggedIn) {
        return (
            <div className={classes.AuthButtons}>
                <LogOutButton/>
            </div> 
        ) 
    } else {
        return (
            <div className={classes.AuthButtons}>
                <SignInButton/>
                <LogInButton/>
            </div>
        )
    }
}

export default AuthButtons;