import request from './request'
export const querylogin=(data)=>request.post(`/user/login.do?username=${data.username}&password=${data.password}`)
export const queryhomepage=()=>request.get('statistic/base_count.do')
export const querylist=(params)=>request.get('product/list.do',{params})
export const querydetail=(params)=>request.get('product/detail.do?productId='+params)
export const queryorder=(params)=>request.get('order/list.do',{params})