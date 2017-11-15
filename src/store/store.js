// 状态管理器
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    show: false,
    num:""
  },
  actions,
  mutations,
  getters:{
    show(state){
      console.log(state.show)
      return state.show
    },
    num(state){
      console.log(state.num)
      return state.num
    }
  }
})
export default store
