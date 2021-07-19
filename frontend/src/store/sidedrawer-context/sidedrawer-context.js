import React, { useState } from "react";

const SideDrawerContext = React.createContext({
    showSideDrawer: false,
    onSideDrawerClosed: () => {},
    onSideDrawerToggle: () => {}
});

export const SideDrawerContextProvider = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false)
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer((prevState) => !prevState.showSideDrawer)
    }

    return <SideDrawerContext.Provider 
                value={{
                    showSideDrawer: showSideDrawer,
                    onSideDrawerClosed: sideDrawerClosedHandler,
                    onSideDrawerToggle: sideDrawerToggleHandler
                }}>{props.children}</SideDrawerContext.Provider>;
}

export default SideDrawerContext;