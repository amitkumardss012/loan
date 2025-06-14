import axios from "axios";
import { ENV } from "../config/env";

export const axiosInstance = axios.create({
    baseURL: ENV.BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "authorization" : `Bearer ${localStorage.getItem("loan_admin_token")}`
    },
    withCredentials: true
})


axiosInstance.interceptors.response.use(
    response => response, // If response is fine, return it
    error => {
      if (error.response && error.response.status === 401) {
        // Token expired or invalid
        alert("Session expired. Please log in again.");
        localStorage.removeItem("loan_admin_token"); // Remove token
        window.location.href = "/admin/login"; // Redirect to login
      }
      return Promise.reject(error);
    }
  );