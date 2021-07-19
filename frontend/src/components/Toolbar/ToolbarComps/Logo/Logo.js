import React from 'react';
import { Link } from "react-router-dom";

import pxlLogo from '../../../../assets/images/PixelLogo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <Link to="/home">
            <img src={pxlLogo} alt="Pixel" />
        </Link>
    </div>
);

export default Logo;