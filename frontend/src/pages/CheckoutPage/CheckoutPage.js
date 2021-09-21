import React from "react";
import { setResponsiveClassName } from "../../utility/utilityFunctions";
import { useSelector } from "react-redux";

import CheckoutCards from "../../components/CheckoutComps/CheckoutCards/CheckoutCards";
import PayMethods from "../../components/CheckoutComps/PayMethods/PayMethods";
import PayCard from "../../components/CheckoutComps/PayCard/PayCard";
import Flash from "../../components/Flash/Flash";
import classes from "./CheckoutPage.module.css";

const CheckoutPage = (props) => {
    const screenSize = useSelector(state => state.screenSize);

    return (
        <div className={setResponsiveClassName(classes, screenSize, "CheckoutPage")}>
            <PayMethods/>
            <CheckoutCards/>
            <PayCard/>
            <Flash/>
        </div>
    )
}

export default CheckoutPage;