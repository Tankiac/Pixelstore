import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import StoreDataService from "../../../services/store";
import ItemCard from "../ItemCard/ItemCard";
import classes from "./ItemLayout.module.css";

const ItemLayout = (props) => {
    const [productData, setProductData] = useState([]);
    const [notFoundMsg, setNotFoundMsg] = useState("");
    const sortBy = useSelector(state => state.sortBy);
    const searchQuery = useSelector(state => state.searchQuery)

    const dispatch = useDispatch();

    let { categoryid } = useParams();

    const getProductsByCategory = (categoryid, sortParam = "") => {
        StoreDataService.getProductsByCategory(categoryid, sortParam)
            .then(response => {
                setProductData(response.data.products);
                if (!response.data.products.length) {
                    setNotFoundMsg(<h2>Sorry, we couldn't find "{categoryid}"</h2>)
                } else if (response.data.products.length) {
                    setNotFoundMsg(null)
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    const getProductsBySearch = () => {
        StoreDataService.getProductsBySearch(searchQuery, sortBy)
            .then(response => {
                setProductData(response.data.products);
                if (!response.data.products.length) {
                    setNotFoundMsg(<h2>Sorry, we couldn't find "{searchQuery}"</h2>)
                } else if (response.data.products.length) {
                    setNotFoundMsg(null)
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {    
        if (searchQuery) {
            getProductsBySearch(searchQuery)
        }
    }, [searchQuery]);

    useEffect(() => {
        if (categoryid !== "search") {
            getProductsByCategory(categoryid)
        }
    }, [categoryid])

    useEffect(() => { 
        if (categoryid === "search") {
            getProductsBySearch(searchQuery, sortBy)
        } else {
            getProductsByCategory(categoryid, sortBy)
        }
    }, [sortBy]);

    return (
        <div className={classes.ItemLayout}>
            {productData.map((product, index) => {
                return <ItemCard 
                    name={product.name} 
                    price={product.price} 
                    shippingCost={product.shippingCost} 
                    stock={product.stock}
                    pictureURL={product.pictures[0]}
                    productid={product._id}
                    key={index}
                />
            })}
            {notFoundMsg}
        </div>
    )
}

export default ItemLayout;