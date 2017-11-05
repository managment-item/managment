// 状态管理器
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    show: '',
  },
  actions,
  mutations,
  getters:{
    show(state){
      return state.show
    }
  }
})
export default store
