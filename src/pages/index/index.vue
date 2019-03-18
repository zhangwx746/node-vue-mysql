<template>
  <div>
    <el-row>
      <el-col :span="24">{{ msg }}</el-col>
      <el-col :span="24">路由参数为{{ parmas }}</el-col>
    </el-row>
    <router-link :to="{ name: 'routerDemo' }">router demo</router-link>
    <el-button type="primary" @click="toRouterDemo">跳转页面</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '这是index页面',
      parmas: ''
    }
  },
  created () {
    console.log(this.$route)
    this.parmas = this.$route.params.id
  },
  methods: {
    toRouterDemo (e) {
      console.log(e)
      this.$router.push('/routerDemo')
    }
  }
}
</script>
<style lang="less">
  @import './index.less';
</style>
