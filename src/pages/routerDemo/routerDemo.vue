<template>
  <div class="router_Demo">
    <el-row>
      <el-col :span="4">
        <router-link :to="{ name: 'index', params: { id } }">1</router-link>
      </el-col>
      <el-col :span="4">{{ inp }}</el-col>
      <el-col :span="4">3</el-col>
      <el-col :span="4">4</el-col>
      <HelloWorld :pShow="pShow" :inpp="inp" @com="com"></HelloWorld>
      <el-button @click="pShowTog">切换显示隐藏</el-button>
    </el-row>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      id: '22525',
      inp: '',
      pShow: false
    }
  },
  methods: {
    pShowTog () {
      this.pShow = !this.pShow
    },
    com (e) {
      console.log(e)
      this.inp = e
    }
  }
}
</script>

<style lang="less">
  @import './routerDemo.less';
</style>
