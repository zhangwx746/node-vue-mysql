<template>
  <div class="login">
    <el-dialog title="登    录" :visible.sync="loginShow" width="25%" :close-on-click-modal="false" :show-close="false">
      <el-form class="login_inp_wrap" :model="userInfo">
        <el-form-item label="用户名：" label-width="80px">
          <el-col :span="18">
            <el-input v-model="userInfo.userName" placeholder="请输入用户名"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密  码：" label-width="80px">
          <el-col :span="18">
            <el-input v-model="userInfo.pwd" type="password" maxlength="16" show-password placeholder="请输入密码"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="loginHide">取 消</el-button>
        <el-button type="primary" @click="loginIn">确 定</el-button>
        <a class="register" href="javascript:void(0);" @click="toRegister">注册</a>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Mixin } from '@/components/mixin.js'
export default {
  mixins: [Mixin],
  props: {
    loginShow: false
  },
  data () {
    return {
      userInfo: {
        userName: '',
        pwd: ''
      },
      needCopyObj: {
        name: 'obj',
        age: 1,
        bodyInfo: {
          headerInfo: {
            name: 'head'
          }
        }
      },
      copyObj: {}
    }
  },
  created () {
  },
  methods: {
    loginIn () {
      this.copyObj = this.deepCopy(this.needCopyObj)
      this.copyObj.name = 'my name is copy'
      console.log(this.copyObj)
      console.log(this.needCopyObj)
      // this.axios.post('/api/login', {
      //   name: this.userInfo.userName,
      //   pwd: this.userInfo.pwd
      // }).then(res => {
      //   console.log(res)
      // })
      this.$emit('loginIn', this.userInfo)
    },
    toRegister () {
      this.$router.push({ name: 'register' })
    },
    loginHide () {
      this.$emit('loginHide')
    }
  }
}
</script>

<style lang="less">
@import './login.less';
</style>
