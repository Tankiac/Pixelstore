import React, { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./Footer.module.css";
import PixelLogo from "../../assets/images/PixelLogo.png"
import LinkedInIcon from "../../assets/images/LinkedInIcon.png"

const Footer = (props) => {
    const screenSize = useSelector(state => state.screenSize);

    const [contactInfo, setContactInfo] = useState(null);

    const onShowContacts = () => {
        if (!contactInfo) {
            setContactInfo(
                <React.Fragment>
                    <div className={classes.Email}>rikdervisevic@gmail.com</div>
                    <a href="">
                        <div className={classes.LinkedIn}>
                            <a href="/" className={classes.LinkedInText}>LinkedIn</a>
                            <img src={LinkedInIcon} className={classes.LinkedInIcon}/>
                        </div>
                    </a>
                </React.Fragment>
            )
        } else if (contactInfo) {
            setContactInfo(null)
        }
    }

    return (
        <footer className={classes.Footer}>
            <div className={`${classes.FooterItems} 
                    ${screenSize === "large" || 
                    screenSize === "medium" || 
                    screenSize === "small" ? classes.FooterItemsLarge : 
                    classes.FooterItemsExtraSmall}`}>
                        
                <div className={classes.LogoContainer}>
                    <img src={PixelLogo} className={classes.Logo}/>
                </div>
                <div className={`${classes.FooterButton} ${classes.About}`}>
                    <a href="https://tarikdportfolio.web.app/" className={classes.AboutMeLink}>About me</a>
                </div>
                <div className={`${classes.FooterButton} ${classes.Contact}`} onClick={onShowContacts}>
                    Contact
                </div>
                {contactInfo}
            </div>
        </footer>
    )
}

export default Footer;