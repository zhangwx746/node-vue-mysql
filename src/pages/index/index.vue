<template>
  <div id="indexPage">
    <MyHeader></MyHeader>
    <el-row>
      <el-col :span="24">{{ msg }}</el-col>
      <el-col :span="24">路由参数为{{ parmas }}</el-col>
    </el-row>
    <router-link :to="{ name: 'routerDemo' }">router demo</router-link>
    <el-button type="primary" @click="toRouterDemo">跳转页面</el-button>
    <Login :loginShow="loginShow" @loginHide="loginHide" @loginIn="loginIn"></Login>
    <el-button type="primary" @click="toLoginIn">登录</el-button>
  </div>
</template>
<script>
import Login from '@/components/login/login'
import MyHeader from '@/components/header/header'
export default {
  data () {
    return {
      msg: '1',
      parmas: '',
      loginShow: false
    }
  },
  components: {
    Login, MyHeader
  },
  created () {
    console.log(this.$route)
    this.parmas = this.$route.params.id
  },
  methods: {
    toRouterDemo (e) {
      console.log(e)
      this.$router.push('/routerDemo')
    },
    loginIn (val) {
      console.log(val)
    },
    toLoginIn () { // 打开登录界面
      this.loginShow = true
    },
    loginHide () { // 关闭登录
      this.loginShow = false
    }
  }
}
</script>
<style lang="less">
  @import './index.less';
</style>
