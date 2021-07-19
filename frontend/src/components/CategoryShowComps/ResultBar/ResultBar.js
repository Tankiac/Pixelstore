import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import classes from "./ResultBar.module.css";

const ResultBar = (props) => {
    const resultBar = useSelector(state => state.resultBar)
    const [resultBarShow, setResultBarShow] = useState("")

    useEffect(() => {
        if (resultBar.showing === "category") {
            setResultBarShow(`Showing ${resultBar.content}`)
        } else if (resultBar.showing === "search") {
            setResultBarShow(`Showing results for "${resultBar.content}"`)
        }
    }, [resultBar])

    return (
        <div className={classes.ResultBar}>
            {resultBarShow}
        </div>
    )
}

export default ResultBar;

/*
    const capitalize = (word) => {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    }
*/