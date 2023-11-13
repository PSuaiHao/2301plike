import request from './request'
export const querylogin=(data)=>request.post(`/user/login.do?username=${data.username}&password=${data.password}`)
export const queryhomepage=()=>request.get('statistic/base_count.do')