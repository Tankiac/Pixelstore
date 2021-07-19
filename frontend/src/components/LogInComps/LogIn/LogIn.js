import React, { useState } from "react";
import StoreDataService from "../../../services/store";
import { Redirect } from "react-router"; 
import { useDispatch } from "react-redux";

import Flash from "../../Flash/Flash";
import pxlLogo from '../../../assets/images/PixelLogo.png';
import classes from "./LogIn.module.css";

const LogIn = (props) => {
    const [redirect, setRedirect] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const onChangeEmail = e => {
        setEmail(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const loginUser = () => {
        if (password.length >= 8) {
            StoreDataService.login({
                email: email, 
                password: password
            }
            ).then((res) => {
                if (res.data.token) {
                    setRedirect(<Redirect to="/home"/>)
                    dispatch({
                        type: "setUser",
                        payload: { 
                            user: {
                                token: res.data.token,
                                ...res.data.user 
                            }
                        }
                    })}
                    dispatch({
                        type: "flash", 
                        payload: {
                            flashMessage: res.data.flashMessage,
                            flashType: res.data.flashType
                    }})
            })
        } else {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: "Password must be at least 8 characters",
                    flashType: "error"
                }
            })
        }
        
    }

    let emailClasses = [classes.Input, classes.Email];
    let passwordClasses = [classes.Input, classes.Password];

    return (
        <div className={classes.LogIn}>
            
            <div className={classes.LogInForm}>
                <div className={classes.LogoContainer}>
                    <img src={pxlLogo} alt="Pixel" className={classes.Logo}/>
                </div>
                    <input className={emailClasses.join(" ")} type="email" placeholder="Email" onChange={onChangeEmail}/>
                    <input className={passwordClasses.join(" ")} type="password" placeholder="Password" onChange={onChangePassword}/>
                    <button className={classes.SubmitBtn} onClick={loginUser}>Log In</button>
            </div>
            <Flash/>
            {redirect}
        </div>
    )
}

export default LogIn;
