import React from "react";
import { setResponsiveClassName } from "../../utility/utilityFunctions";
import { useSelector } from "react-redux";

import CartItems from "../../components/CartComps/CartItems/CartItems";
import TotalCard from "../../components/CartComps/TotalCard/TotalCard";
import classes from "./CartPage.module.css";

const CartPage = (props) => {
    const screenSize = useSelector(state => state.screenSize);
    return (
        <div className={setResponsiveClassName(classes, screenSize, "CartPage")}>
            <CartItems/>
            <TotalCard/>
        </div>
    )
}

export default CartPage;