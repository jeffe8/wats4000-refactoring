// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
// Set common parameters for each request to the API.
config.params.APPID = '2fb34a3830a9a3316703d4d5dd4aa762';
config.params.units = 'imperial';

return config;
}, function(error) {
    return Promise.reject(error);
});