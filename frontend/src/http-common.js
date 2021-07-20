import axios from "axios";

export default axios.create({
    baseURL: "https://salty-eyrie-09068.herokuapp.com/",
    headers: { 
        "Content-type": "application/json"
    }
});