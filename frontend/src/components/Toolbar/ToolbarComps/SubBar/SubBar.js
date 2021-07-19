import React from "react";

import classes from "./SubBar.module.css";
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import Categories from "./Categories/Categories";

const SubBar = (props) => {
    return (
        <div className={classes.SubBar}>
            <DrawerToggle/>    
            <Categories/>
        </div>
    )
}

export default SubBar;