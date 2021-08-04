import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const ScreenSizeChecker = (props) => {
    const dispatch = useDispatch();

    const updateMedia = (isSmallScreen) => {
        dispatch({
            type: "setSmallScreen",
            payload: {
                isSmallScreen: isSmallScreen
            }
        })
    };

    useEffect(() => {
    window.addEventListener("resize", () => {updateMedia(window.innerWidth < 800)});
    return () => window.removeEventListener("resize", () => {updateMedia(window.innerWidth < 800)});
    });

    return null;
}

export default ScreenSizeChecker;