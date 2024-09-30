// Redirects request to backend.

import axios from "axios";
export default axios.create({
  baseURL: "https://backend-eibb.onrender.com//api",
  headers: {
    "Content-type": "application/json",
  },
});
