export const setResponsiveClassName = (classes, screenSize, baseClassName) => {
    let responsiveClassString = `
        ${eval(`classes.${baseClassName}`)} ${screenSize === "large" ? eval(`classes.${baseClassName}Large`) :
        screenSize === "medium" ? eval(`classes.${baseClassName}Medium`) : 
        screenSize === "small" ? eval(`classes.${baseClassName}Small`) : 
        screenSize === "extraSmall" ? eval(`classes.${baseClassName}ExtraSmall`) : 
        null}`;
    return responsiveClassString;
}

