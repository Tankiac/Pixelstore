import React from "react";
import { Link } from "react-router-dom";

import classes from "./DrawerItem.module.css";

const DrawerItem = ( props ) => {
    if (props.linkpath) {
        return (
            <Link to={`${props.linkpath}`} className={classes.DrawerItem}>
                {props.name}
            </Link>
        );
    } else if (props.linkpath === "") {
        return (
            <div className={classes.DrawerItem} onClick={props.showCategories}>
                {props.name}
            </div>
        )
    }
    
};

export default DrawerItem;