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
        if (window.innerWidth < 900) {updateMedia(window.innerWidth < 900)};
        window.addEventListener("resize", () => {updateMedia(window.innerWidth < 900)});
        return () => window.removeEventListener("resize", () => {updateMedia(window.innerWidth < 900)});
    });

    return null;
}

export default ScreenSizeChecker;