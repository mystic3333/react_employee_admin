import http from '../utils/request'

export function add(data) {
    console.log(data)
    return http({
        url: '/api/department/add',
        method: 'post',
        data
    })
}