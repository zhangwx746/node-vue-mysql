<template>
  <div>
    <a href="https://www.jianshu.com/p/c9b8bbaca875" target="_blank">vuex教程文档</a>
    <p>{{ name }}</p>
    <p>{{ list }}</p>
    <p>{{ text }}</p>
    <el-button @click="changeName">更改名字</el-button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      a: 10
    }
  },
  computed: {
    ...mapGetters({
      name: 'detail',
      list: 'getList'
    }),
    ...mapState({
      name: 'name',
      text: state => (`${state.user.text}和${state.list.text}`),
      age: function (state) { // 此处不能用箭头函数，箭头函数的this指向不是vue
        return this.a + state.age
      }
    })
  },
  methods: {
    ...mapActions(['callAction', 'setListAct']),
    ...mapMutations(['setTextA', 'setTextB']),
    changeName () {
      // this.setName('改变！')
      this.callAction()
      this.setTextA()
    }
  }
}
</script>
