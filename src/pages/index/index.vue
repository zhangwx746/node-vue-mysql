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
    <div v-for="(item, index) in 2" :key="index">
      <Echarts :eId="'e' + index"></Echarts>
    </div>
  </div>
</template>
<script>
import Login from '@/components/login/login'
import MyHeader from '@/components/header/header'
import Echarts from '@/components/echarts/echarts'
import { Mixin } from '@/components/mixin.js'
export default {
  mixins: [Mixin],
  data () {
    return {
      msg: '1',
      parmas: '',
      loginShow: false
    }
  },
  components: {
    Login, MyHeader, Echarts
  },
  created () {
    console.log(this.$route)
    this.parmas = this.$route.params.id
    this.testMethod()
  },
  mounted () {
    // window.onbeforeunload = e => {
    //   window.localStorage.setItem('a', '456')
    //   alert('关闭浏览器')
    //   e.returnValue = '关闭提示'
    // }
  },
  methods: {
    toRouterDemo (e) {
      console.log(e)
      this.$router.push('/routerDemo')
    },
    loginIn (val) {
      console.log(val)
      new Promise((resolve, reject) => {
        this.axios.post('./api/login', {
          name: val.userName,
          pwd: val.pwd
        }).then(res => {
          if (res.data.code) {
            resolve()
          } else {
            reject(new Error('登录错误'))
          }
        })
      }).then(() => {
        this.loginShow = false
        console.log('登录成功')
      }).catch(err => {
        console.log(err)
      })
      // this.axios.post('/api/login', {
      //   name: val.userName,
      //   pwd: val.pwd
      // }).then(res => {
      //   console.log(res)
      //   if (res.data.code) {
      //     this.loginShow = false
      //   } else {
      //     console.log(res.data.message)
      //   }
      // })
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
