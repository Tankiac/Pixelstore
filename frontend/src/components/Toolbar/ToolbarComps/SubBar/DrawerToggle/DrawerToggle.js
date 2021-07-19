import React, { useContext } from 'react';

import classes from './DrawerToggle.module.css';
import drawerTogglePng from "../../../../../assets/images/DrawerToggle.png"
import SideDrawerContext from "../../../../../store/sidedrawer-context/sidedrawer-context"

const DrawerToggle = (props) => {
    const sideDrawerCtx = useContext(SideDrawerContext);

    return (
        <img
        src={drawerTogglePng}   
        className={classes.DrawerToggle}
        onClick = {sideDrawerCtx.onSideDrawerToggle}/>
    )

};

export default DrawerToggle;