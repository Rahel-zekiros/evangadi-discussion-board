
import axios from "axios";

/**
 * Configured axios instance for API communication.
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request interceptor to attach the JWT token to headers.
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * Response interceptor to handle global errors and auth session expirations.
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const isAuthEndpoint =
      error.config?.url?.includes("/api/auth/login") ||
      error.config?.url?.includes("/api/auth/register") ||
      error.config?.url?.includes("/api/auth/me");

    if (error.response?.status === 401 && !isAuthEndpoint) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("activeUser");
      window.location.href = "/auth";
    }

    return Promise.reject(error);
  },
);

export { apiClient };
