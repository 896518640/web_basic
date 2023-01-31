import axios, { InternalAxiosRequestConfig } from 'axios';

const service = axios.create();

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    },
);
service.interceptors.request.use(
    async (response: InternalAxiosRequestConfig) => {
        return Promise.resolve(response);
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

export default service;
