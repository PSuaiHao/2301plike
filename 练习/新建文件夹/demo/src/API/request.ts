import axios from 'axios'

let request = axios.create({
    baseURL: 'https://api.it120.cc/xiaochengxu/',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

request.interceptors.request.use(config => {
    
    return config
}, err => {
    throw new Error(err)
})

request.interceptors.response.use(result => {
    return result.data
}, err => {
    throw new Error(err)
})


export default request