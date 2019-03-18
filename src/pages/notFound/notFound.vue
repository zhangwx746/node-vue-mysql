<template>
  <div>
    <el-row>
      <el-col :span="24">{{ msg }}</el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '404页面'
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
  @import './notFound.less';
</style>
