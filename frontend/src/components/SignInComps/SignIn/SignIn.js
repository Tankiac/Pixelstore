import React, { useState } from "react";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";

import Flash from "../../Flash/Flash";
import StoreDataService from "../../../services/store";
import pxlLogo from '../../../assets/images/PixelLogo.png';
import classes from "./SignIn.module.css";

const SignIn = (props) => {
    const [redirect, setRedirect] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const usernameRegex = /^[a-zA-Z0-9]{1,20}$/
    const passwordRegex = /^[\w~@#$%^&*+=`|{}:;!.?\()\[\]-]{8,40}$/

    const dispatch = useDispatch();

    const onChangeUsername = e => {
        setUsername(e.target.value);
    }

    const onChangeEmail = e => {
        setEmail(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const registerUser = () => {
        if (passwordRegex.exec(password) && usernameRegex.exec(username) && emailRegex.exec(email)) {
        StoreDataService.register({
                username: username, 
                email: email, 
                password: password
            }
        ).then((res) => {
                setRedirect(<Redirect to="/login"/>)
                dispatch({
                    type: "flash",
                    payload: {
                        flashMessage: res.data.message,
                        flashType: res.data.flashType
                    }
                })
        })} else if (password.length < 8) {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: "Password must be at least 8 characters",
                    flashType: "error"
                }
            }) 
        } else if (!passwordRegex.exec(password)) {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: "Please enter a valid password",
                    flashType: "error"
                }
            }) 
        }
        else if (!usernameRegex.exec(username)) {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: "Please enter a valid username",
                    flashType: "error"
                }
            })
        } else if (!emailRegex.exec(email)) {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: "Please enter a valid email",
                    flashType: "error"
                }
            })
        }
    }

    let userNameClasses = [classes.Input, classes.UserName];
    let emailClasses = [classes.Input, classes.Email];
    let passwordClasses = [classes.Input, classes.Password];

    return (
        <div className={classes.SignIn}>
            <div className={classes.SignInForm}>
                <div className={classes.LogoContainer}>
                    <img src={pxlLogo} alt="Pixel" className={classes.Logo}/>
                </div>
                    <input className={userNameClasses.join(" ")} type="text" placeholder="Username" onChange={onChangeUsername}/>
                    <input className={emailClasses.join(" ")} type="email" placeholder="Email" onChange={onChangeEmail}/>
                    <input className={passwordClasses.join(" ")} type="password" placeholder="Password" onChange={onChangePassword}/>
                    <button className={classes.SubmitBtn} onClick={registerUser}>Create Account</button>
            </div>
            <Flash/>
            {redirect}
        </div>
    )
}

export default SignIn;