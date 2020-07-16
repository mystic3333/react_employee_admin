import axios from 'axios'

const http = axios.create({
    baseUrl: '/api',
    timeout: 5000
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
    config.headers.authorization = `mystic ${token}`

    } else {
        config.headers.authorization = ''
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default http