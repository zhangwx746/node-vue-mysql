<template>
  <div class="register">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.repwd"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        pwd: '',
        repwd: '',
        tel: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
      this.axios.post('/api/register', this.form).then(res => {
        console.log(res)
        if (res.data.code === 1) {
          console.log('注册成功')
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>

<style lang="less">
@import './register.less';
</style>
