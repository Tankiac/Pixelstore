import React, { useState } from 'react';

import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import DrawerItem from "./DrawerItem/DrawerItem";
import { useSelector } from 'react-redux';

const SideDrawer = ( props ) => {
    const [categories, setCategories] = useState(null)

    const username = useSelector(state => state.user.username)

    const onShowCategories = (e) => {
        e.stopPropagation();
        let drawerItems = 
        <>
            <DrawerItem name="Laptops" linkpath="/categoryshow/laptops"/>
            <DrawerItem name="Desktops" linkpath="/categoryshow/desktops"/>
            <DrawerItem name="Phones" linkpath="/categoryshow/phones"/>
            <DrawerItem name="Keyboards" linkpath="/categoryshow/keyboards"/>
            <DrawerItem name="Headsets" linkpath="/categoryshow/headsets"/>
            <DrawerItem name="Speakers" linkpath="/categoryshow/speakers"/>
            <DrawerItem name="Hardware" linkpath="/categoryshow/hardware"/>
            <DrawerItem name="Cables" linkpath="/categoryshow/cables"/>
        </>
        if (categories) {
            setCategories(null);
        } else if (!categories) {
            setCategories(drawerItems);
        }
    }

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.DrawerHeader}>Hello, <span className={classes.Username}>&nbsp;{username ? username : "User"}</span></div>
                <nav>
                    <DrawerItem name="Cart" linkpath="/cart"/>
                    <DrawerItem name="Checkout" linkpath="/checkout"/> 
                    <DrawerItem name="Categories" linkpath="" showCategories={onShowCategories}/>
                    {categories}
                </nav>
            </div>
        </React.Fragment>
    );
};

export default SideDrawer;