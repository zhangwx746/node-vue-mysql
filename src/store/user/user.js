export default {
  state: {
    name: '没变',
    age: '10',
    text: 'user'
  },
  getters: {
    // 如果要访问store根节点数据，rootState必须是第三个参数
    detail (state, getters, rootState) {
      console.log(rootState)
      return state.age + '-' + rootState.user.name
    }
  },
  mutations: {
    setTextA (state) {
      state.text = 'A'
    },
    setName (state, newName) {
      state.name = newName
    },
    getAge (state) {
      state.age = 20
    }
  },
  actions: {
    setName ({commit}, newName) {
      commit('setName', newName)
    },
    callAction ({state, rootState}) {
      console.log(rootState)
    }
  }
}
