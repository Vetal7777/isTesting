import axios from "axios";

export default axios.create({
  baseURL: "https://lilac-springbok-hat.cyclic.app/",
  headers: {
    "Content-Type": "application/json",
  },
});