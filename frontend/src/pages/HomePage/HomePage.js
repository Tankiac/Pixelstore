import React from "react";

import CardLayout from "../../components/HomeCtgs/CardLayout/CardLayout";
import CtgCarousel from "../../components/HomeCtgs/CtgCarousel/CtgCarousel";
import Flash from "../../components/Flash/Flash";
import classes from "./HomePage.module.css";

const HomePage = (props) => {
    return (
        <div className={classes.HomePage}>
            <CardLayout/>
            <CtgCarousel/>
            <Flash/>
        </div>
    )
}

export default HomePage;