// First we need to import axios.js
import axios, { AxiosRequestHeaders } from "axios";
const instance = axios.create({
  // .. where we make our configurations
  baseURL: "http://localhost:9000", // for production
  // baseURL: "http://192.168.1.81:8000", // for local
  // baseURL: "http://localhost", // for build

  headers: {
    "Content-Type": "application/json",
  },
});
export const setAuthToken = (token?: string) => {
  if (token) {
    instance.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers["Authorization"];
  }
};
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers = config.headers || ({} as AxiosRequestHeaders);
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         const originalRequest = error.config;
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             const refreshToken = localStorage.getItem('refresh');
//             const response = await axios.post('authentication/token/refresh/', {
//                 refresh: refreshToken
//             });
//             if (response.status === 200) {
//                 localStorage.setItem('access', response.data.access);
//                 localStorage.setItem('refresh', response.data.refresh);
//                 return instance(originalRequest);
//             }
//         }
//         if (error.response.status === 403) {
//             redirectToLogin();
//         }
//         return Promise.reject(error);
//     }
// )
// const redirectToLogin = () => {
//     localStorage.clear();
//     window.location.href = '/login';
// };
export default instance;
