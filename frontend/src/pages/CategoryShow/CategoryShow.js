import React from "react";

import ItemLayout from "../../components/CategoryShowComps/ItemLayout/ItemLayout";
import QueryBar from "../../components/CategoryShowComps/QueryBar/QueryBar";
import ResultBar from "../../components/CategoryShowComps/ResultBar/ResultBar";
import classes from "./CategoryShow.module.css";

const CategoryShow = (props) => {
    return (
        <div className={classes.CategoryShow}>
            <ResultBar/>
            <QueryBar/>
            <ItemLayout/>
        </div>
    )
}

export default CategoryShow;