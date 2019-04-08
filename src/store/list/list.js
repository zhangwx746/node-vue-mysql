export default {
  state: {
    listNum: 0,
    count: 0,
    text: 'list'
  },
  getters: {
    getList (state, getters, rootState) {
      console.log(rootState)
      // 这里的rootState.count是undefined，rootState只能直接访问根节点的state
      return state.listNum + rootState.count
    }
  },
  mutations: {
    setTextB (state) {
      state.text = 'B'
    },
    setList (state, NewList) {
      state.listNum = NewList
    }
  },
  actions: {
    setListAct ({state, rootState}) {
      console.log(rootState)
    }
  }
}
