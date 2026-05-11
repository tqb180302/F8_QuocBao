import axios, {type AxiosInstance} from 'axios'

const baseURL = "https://jsonplaceholder.typicode.com";

const api: AxiosInstance = axios.create({
    baseURL,
});

// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("accessToken")
//         if (token) {
//             config.headers["Authorization"] = `Bearer ${token}`
//         }
//         return config
//     }
// );

export default api
