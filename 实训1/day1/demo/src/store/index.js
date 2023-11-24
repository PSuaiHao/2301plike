import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  getters: {
    num (state){
      return   state.list.filter(item=>item.flag).length
      
    },
    
  },
  mutations: {
    setadd(state,val){
      state.list.push({
        flag:false,
        txt:val,
        id:+new Date()
      })
    },
    handldel(state,val){
      state.list=state.list.filter(item=>item.id!=val)
    },
    delchecked(state){
      state.list=state.list.filter(item=>!item.flag)
    }
  },
  actions: {
  },
  modules: {
  }
})
