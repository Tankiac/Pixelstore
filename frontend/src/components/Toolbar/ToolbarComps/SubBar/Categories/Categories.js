import React, { useState, useEffect } from "react";

import classes from "./Categories.module.css";
import CategoryBtn from "./CategoryBtn/CategoryBtn";

const Categories = (props) => {
    const categoryData = ["Laptops", "Desktops", "Phones", "Keyboards", "Headsets", "Speakers", "Tablets", "Consoles"]

    const isSmallScreen = false;

    return (
       
        <div className={classes.Categories}>
            { !isSmallScreen ? (
            categoryData.map((category, index) => {
                return <CategoryBtn name={category} key={index}></CategoryBtn>
            })
            )
            :  null }
        </div> 
    )
}

export default Categories;