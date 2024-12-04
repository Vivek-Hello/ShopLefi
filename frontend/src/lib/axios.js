import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:8000/api" : "/api",
  withCredentials: true, // Send cookies to the server
});

export default axiosInstance;
