import Vue from 'vue'
import router from './router'
import axios from 'axios'
import vuex from 'vuex'
import VueAxios from 'vue-axios'
import store from './store/index.js'
import Echarts from 'echarts'
import {
  Button, Input, Row, Col, Dialog, MessageBox,
  Form, FormItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(vuex)
Vue.use(Button)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.component(MessageBox.name, MessageBox)

const MsgBox = MessageBox
Vue.prototype.$msgBox = MsgBox
Vue.prototype.$confirm = MsgBox.confirm
Vue.prototype.$echarts = Echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
