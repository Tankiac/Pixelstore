import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const ScreenSizeChecker = (props) => {
    const dispatch = useDispatch();

    const updateScreenSize = (screenSize) => {
        dispatch({
            type: "setScreenSize",
            payload: {
                screenSize: screenSize
            }
        })
    };

    useEffect(() => {
        if (window.innerWidth < 900 && window.innerWidth > 450) 
        {
            updateScreenSize("small")
        } else if (window.innerWidth < 450) {
            updateScreenSize("extraSmall")
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth < 900 && window.innerWidth > 450) 
        {
            updateScreenSize("small")
        } else if (window.innerWidth < 450) {
            updateScreenSize("extraSmall")
        } else if (window.innerWidth > 900) {
            updateScreenSize("large")
        }
        });
        return () => window.removeEventListener("resize", () => {
            if (window.innerWidth < 900 && window.innerWidth > 450) 
        {
            updateScreenSize("small")
        } else if (window.innerWidth < 450) {
            updateScreenSize("extraSmall")
        } else if (window.innerWidth > 900) {
            updateScreenSize("large")
        }
        });
    });
    return null;
}

export default ScreenSizeChecker;