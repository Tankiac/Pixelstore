import React from "react";
import { useSelector } from "react-redux";

import classes from "./Categories.module.css";
import CategoryBtn from "./CategoryBtn/CategoryBtn";

const Categories = (props) => {
    const isSmallScreen = useSelector(state => state.isSmallScreen)
    const categoryData = ["Laptops", "Desktops", "Phones", "Keyboards", "Headsets", "Speakers", "Tablets", "Consoles"]

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