import axios from 'axios'

const http = axios.create({
    baseUrl: '/api',
    timeout: 5000
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
    console.log('2',process.env.REACT_APP_BASE_URL)
    console.log('1',process.env.REACT_APP_API)

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