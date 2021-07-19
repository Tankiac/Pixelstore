import React from "react";

import CartItems from "../../components/CartComps/CartItems/CartItems";
import TotalCard from "../../components/CartComps/TotalCard/TotalCard";
import classes from "./CartPage.module.css";

const CartPage = (props) => {
    return (
        <div className={classes.CartPage}>
            <CartItems/>
            <TotalCard/>
        </div>
    )
}

export default CartPage;