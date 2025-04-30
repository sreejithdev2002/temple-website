import axios from "axios";
import Cookies from "js-cookie";

const apiURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: `${apiURL}`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const sessionToken = sessionStorage.getItem("session_token");

    const userUniqueId = Cookies.get("user_unique_id");

    if (sessionToken) {
      config.headers["Authorization"] = `Bearer ${sessionToken}`;
    }

    if (userUniqueId) {
      if (config.method === "post" || config.method === "put") {
        config.data = {
          ...config.data,
          user_unique_id: userUniqueId,
        };
      } else {
        config.params = {
          ...config.params,
          user_unique_id: userUniqueId,
        };
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
