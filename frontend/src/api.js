import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8000", // adjust base URL as per backend
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
