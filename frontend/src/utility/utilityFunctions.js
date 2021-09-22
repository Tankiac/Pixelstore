export const setResponsiveClassName = (classes, screenSize, baseClassName) => {
    let responsiveClassString = `
        ${eval(`classes.${baseClassName}`)} ${screenSize === "large" ? eval(`classes.${baseClassName}Large`) :
        screenSize === "medium" ? eval(`classes.${baseClassName}Medium`) : 
        screenSize === "small" ? eval(`classes.${baseClassName}Small`) : 
        screenSize === "extraSmall" ? eval(`classes.${baseClassName}ExtraSmall`) : 
        null}`;
    return responsiveClassString;
}

export const timeConverter = (offset = 0) => {
    let unix = new Date(Date.now());
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let months31 = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];
    let months30 = ["Apr", "Jun", "Aug", "Oct", "Dec"]; 
    let month = months[unix.getMonth()];
    let date = unix.getDate();
    if (months31.includes(month)) {
        if (date + offset > 31) {
            if (month === "Dec") {
                month = "Jan"
            } else {
                month = months[months.indexOf(month) + 1]
            }
            date = date + offset - 31;
        } else {
            date += offset;
        }
    } else if (months30.includes(month)) {
        if (date + offset > 30) {
            if (month === "Dec") {
                month = "Jan"
            } else {
                month = months[months.indexOf(month) + 1]
            }
            date = date + offset - 31;
        } else {
            date += offset;
        }
    } if (month === "Feb") {
        if (date + offset > 28) {
                month = months[months.indexOf(month) + 1] 
        } else {
            date += offset;
        }
    }
    let time = `${month} ${date}.`
    return time;
  }