import request from "./request";
export const querybanner = (params: any) => request.get('/banner/list', params)
export const querylist = (data: any) => request.post('/shop/goods/list/v2', data)
export const querydetail = (id: any) => request.post('/shop/goods/detail?id='+id)
export const queryleft = () => request.get('/shop/goods/category/all')
export const queryright = (data: any) => request.post('/shop/goods/list/v2', data)
export const queryadd=(data:any)=>request.post('shopping-cart/add',data)