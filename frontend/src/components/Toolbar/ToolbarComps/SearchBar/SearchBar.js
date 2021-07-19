import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";

import classes from "./SearchBar.module.css";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [redirect, setRedirect] = useState(null);

    const dispatch = useDispatch();

    const onSetSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    }

    const onSubmitSearch = () => {
        setRedirect(<Redirect to="/categoryshow/search"/>)
        setTimeout(() => {
            setRedirect(null)
        }, 200)
        dispatch({
            type: "setResultBar",
            payload: {
                resultBar: { 
                    content: searchQuery,
                    showing: "search"
                }
            }
        })
        dispatch({
            type: "setSearchQuery",
            payload: {
                searchQuery: ""
            }
        })
        dispatch({
            type: "setSortBy",
            payload: {
                sortBy: ""
            }
        })
        setTimeout(() => {
            dispatch({
                type: "setSearchQuery",
                payload: {
                    searchQuery: searchQuery
                }
            })
        }, 50)
    }

    const searchInput = useRef();
    const searchButton = useRef();

    useEffect(() => {
        searchInput.current.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                searchButton.current.click();
            }
        })
    }, [])

    return (
        <div className={classes.SearchBar}>
                <input 
                    className={classes.SearchBox} 
                    ref={searchInput} 
                    type="text" 
                    spellCheck="false" 
                    onChange={onSetSearchQuery}>
                </input>
                <button 
                    className={classes.SearchButton}
                    onClick={onSubmitSearch}
                    ref={searchButton}>
                    Search
                </button>
                {redirect}
        </div>
    )
}

export default SearchBar;