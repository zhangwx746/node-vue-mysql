import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {
  Button, Input, Row, Col, Dialog, MessageBox,
  Form, FormItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
