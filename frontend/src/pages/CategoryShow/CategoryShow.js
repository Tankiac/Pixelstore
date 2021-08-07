import React from "react";
import { useSelector } from "react-redux";

import ItemLayout from "../../components/CategoryShowComps/ItemLayout/ItemLayout";
import QueryBar from "../../components/CategoryShowComps/QueryBar/QueryBar";
import ResultBar from "../../components/CategoryShowComps/ResultBar/ResultBar";
import classes from "./CategoryShow.module.css";

const CategoryShow = (props) => {
    const screenSize = useSelector(state => state.screenSize)

    return (
        <div className={screenSize === "large" ? classes.CategoryShow : classes.CategoryShowSmall}>
            <ResultBar/>
            {screenSize === "large" && <QueryBar/>}
            <ItemLayout/>
        </div>
    )
}

export default CategoryShow;