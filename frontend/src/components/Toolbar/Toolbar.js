import React from "react";
import { useSelector } from "react-redux";

import classes from "./Toolbar.module.css"
import Logo from './ToolbarComps/Logo/Logo';
import SearchBar from "./ToolbarComps/SearchBar/SearchBar";
import AuthButtons from "./ToolbarComps/AuthButtons/AuthButtons";
import CartIcon from "./ToolbarComps/CartIcon/CartIcon";
import SubBar from "./ToolbarComps/SubBar/SubBar";

const Toolbar = (props) => {
    const token = useSelector(state => state.user.token);

    return (
        <React.Fragment>
            <header className={classes.Toolbar}>
                <Logo height={"50px"}/>
                <SearchBar/>
                <AuthButtons loggedIn={!!token}/>
                <CartIcon/>
            </header>
            <SubBar/>
        </React.Fragment> 
    )
}

export default Toolbar;