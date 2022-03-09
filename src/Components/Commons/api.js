import axios from "axios";

export default axios.create({
  
  baseURL: "https://back.ah1.ir/wp-json/wp/v2/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
