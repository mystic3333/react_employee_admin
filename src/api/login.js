import http from '../utils/request'

const baseUrl = process.env.REACT_APP_BASE_URL

export function login() {   
    return http({
        url: '/api/user/login',
        method: 'get'
    })
}

export function getCode() {
    return http({
        url: '/api/user/getCode',
        method: 'get'
    })
}