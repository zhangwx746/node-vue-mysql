<template>
  <div>
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
    }
  },
  computed: {
    ...mapGetters({
      name: 'detail',
      list: 'getList'
    }),
    ...mapState({
      text: state => (`${state.user.text}和${state.list.text}`),
      name: state => state.user.name
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
