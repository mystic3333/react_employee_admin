import http from '../utils/request'
import config from '../config'

export function login(params) {   
    return http({
        url: 'http://localhost:5000/user/code',
        method: 'get',
        params
    })
}

// export function getLoginCode(data) {
//     return http({
//         url: '/getSms',
//         method: 'post',
//         data
//     })
// }