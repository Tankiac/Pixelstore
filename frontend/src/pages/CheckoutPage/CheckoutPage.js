import React from "react";

import CheckoutCards from "../../components/CheckoutComps/CheckoutCards/CheckoutCards";
import PayMethods from "../../components/CheckoutComps/PayMethods/PayMethods";
import PayCard from "../../components/CheckoutComps/PayCard/PayCard";
import Flash from "../../components/Flash/Flash";
import classes from "./CheckoutPage.module.css";

const CheckoutPage = (props) => {
    return (
        <div className={classes.CheckoutPage}>
            <PayMethods/>
            <CheckoutCards/>
            <PayCard/>
            <Flash/>
        </div>
    )
}

export default CheckoutPage;