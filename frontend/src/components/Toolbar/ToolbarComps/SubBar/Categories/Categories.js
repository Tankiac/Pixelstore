import React from "react";

import classes from "./Categories.module.css";
import CategoryBtn from "./CategoryBtn/CategoryBtn";

const Categories = (props) => {

    const categoryData = ["Laptops", "Desktops", "Phones", "Keyboards", "Headsets", "Speakers", "Tablets", "Consoles"]

    return (
        <div className={classes.Categories}>
            {categoryData.map((category, index) => {
                return <CategoryBtn name={category} key={index}></CategoryBtn>
            })}
        </div>
    )
}

export default Categories;