import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { setResponsiveClassName } from "../../utility/utilityFunctions";

import Flash from "../../components/Flash/Flash";
import ItemPicture from "../../components/ItemShowComps/ItemPicture/ItemPicture";
import ItemDetails from "../../components/ItemShowComps/ItemDetails/ItemDetails";
import ItemReviews from "../../components/ItemShowComps/ItemReviews/ItemReviews";
import StoreDataService from "../../services/store";
import classes from "./ItemShow.module.css";

const ItemShow = (props) => {
    const screenSize = useSelector(state => state.screenSize);
    const [productData, setProductData] = useState(null);

    let { productid } = useParams();

    const getProduct = (productid) => {
        StoreDataService.getProductById(productid)
            .then(response => {
                console.log("setProductData called")
                setProductData(response.data.product)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getProduct(productid);
    }, [productid]);

    return productData && (
        <div className={setResponsiveClassName(classes, screenSize, "ItemShow")}>
            <ItemPicture pictures={productData.pictures}/>
            <ItemDetails productData={productData}/>
            <ItemReviews reviews={productData.reviews} productid={productData._id} getProduct={getProduct}/> 
            <Flash/>
        </div>
    )
}

export default ItemShow;