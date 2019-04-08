import vue from 'vue'
import Vuex from 'vuex'
import user from './user/user'
import list from './list/list'

vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user, list
  },
  state: {
    name: '没变'
  }
  // getters: {
  // },
  // mutations: {
  //   setName (state, newName) {
  //     state.name = newName
  //   }
  // },
  // actions: {
  //   setName ({commit}, newName) {
  //     commit('setName', newName)
  //   }
  // }
})
