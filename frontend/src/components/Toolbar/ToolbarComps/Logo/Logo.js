import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import pxlLogo from '../../../../assets/images/PixelLogo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
    const isSmallScreen = useSelector(state => state.isSmallScreen)
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <Link to="/home">
                <img src={pxlLogo} 
                className={isSmallScreen ? classes.LogoImgSmall : classes.LogoImgLarge} 
                alt="Pixel" />
            </Link> 
        </div> 
    )
};

export default Logo;