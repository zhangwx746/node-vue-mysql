import Vue from 'vue'
import router from './router'
import { Button, Input, Row, Col } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
