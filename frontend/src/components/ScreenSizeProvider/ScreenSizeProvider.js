import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const ScreenSizeProvider = (props) => {
    const dispatch = useDispatch();

    const updateScreenSize = (screenSize) => {
        dispatch({
            type: "setScreenSize",
            payload: {
                screenSize: screenSize
            }
        })
    };

    const mediumBreakpoint = 1150;
    const smallBreakpoint = 900;
    const extraSmallBreakpoint = 450;

    useEffect(() => {
        const checkScreenSizeInterval = setInterval(() => {
            if (window.innerWidth > mediumBreakpoint) 
        {
                updateScreenSize("large")
        }
            else if (window.innerWidth < mediumBreakpoint && window.innerWidth > smallBreakpoint) 
        {
            updateScreenSize("medium")
        }
            if (window.innerWidth < smallBreakpoint && window.innerWidth > extraSmallBreakpoint) 
        {
            updateScreenSize("small")
        } else if (window.innerWidth < extraSmallBreakpoint) {
            updateScreenSize("extraSmall")
        }
        }, 200);
        setTimeout(() => {  // setTimeout because window.innerWidth returns wrong value without it
            if (window.innerWidth < mediumBreakpoint && window.innerWidth > smallBreakpoint) 
        {
            updateScreenSize("medium")
        }
            if (window.innerWidth < smallBreakpoint && window.innerWidth > extraSmallBreakpoint) 
        {
            updateScreenSize("small")
        } else if (window.innerWidth < extraSmallBreakpoint) {
            updateScreenSize("extraSmall")
        }
        }, 10);
        window.addEventListener("resize", () => {
            if (window.innerWidth < smallBreakpoint && window.innerWidth > extraSmallBreakpoint) 
        {
            updateScreenSize("small")
        } else if (window.innerWidth < extraSmallBreakpoint) {
            updateScreenSize("extraSmall")
        } else if (window.innerWidth > smallBreakpoint && window.innerWidth < mediumBreakpoint) {
            updateScreenSize("medium")
        } else if (window.innerWidth > mediumBreakpoint) {
            updateScreenSize("large")
        }
        });
        return () => window.removeEventListener("resize", () => {
            if (window.innerWidth < smallBreakpoint && window.innerWidth > extraSmallBreakpoint) 
        {
            updateScreenSize("small")
        } else if (window.innerWidth < extraSmallBreakpoint) {
            updateScreenSize("extraSmall")
        } else if (window.innerWidth > smallBreakpoint && window.innerWidth < mediumBreakpoint) {
            updateScreenSize("medium")
        } else if (window.innerWidth > mediumBreakpoint) {
            updateScreenSize("large")
        }
        });
        
    });
    return null;
}

export default ScreenSizeProvider;