import axios from "axios";

const setBaseURL = () => {
    if (process.env.NODE_ENV === "production") {
        return "https://salty-eyrie-09068.herokuapp.com/"
    } else if (process.env.NODE_ENV !== "production") {
        return "http://localhost:5000/"
    }
}

const baseURL = setBaseURL();

export default axios.create({
    baseURL: baseURL,
    headers: { 
        "Content-type": "application/json"
    }
});