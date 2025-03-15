import axios, {
    AxiosError,
    AxiosResponse,
    InternalAxiosRequestConfig
} from "axios";

import { API_URL } from "@/shared";

export const instance = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
    },
    withCredentials: true
});

instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (config.data instanceof FormData) {
            config.headers["Content-Type"] = "multipart/form-data";
        } else {
            config.headers["Content-Type"] = "application/json";
        }

        return config;
    },
    async (error: AxiosError) => {
        return await Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        return response.data;
    },
    async (error: AxiosError) => {
        return await Promise.reject(error);
    }
);
