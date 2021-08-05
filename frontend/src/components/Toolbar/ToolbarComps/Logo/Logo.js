import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import pxlLogo from '../../../../assets/images/PixelLogo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
    const screenSize = useSelector(state => state.screenSize)
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <Link to="/home">
                <img src={pxlLogo} 
                className=
                    {screenSize === "small" ? classes.LogoImgSmall : 
                    screenSize === "large" ? classes.LogoImgLarge :
                    classes.LogoImgExtraSmall} 
                alt="Pixel" />
            </Link> 
        </div> 
    )
};

export default Logo;