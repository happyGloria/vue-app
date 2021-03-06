// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/iconfonts/iconfont.css'
import 'vant/lib/vant-css/index.css'
import '@/less/index.less'

import {
  Button,
  Row,
  Col,
  Swipe,
  SwipeItem,
  lazyload // 图片懒加载
} from 'vant'

Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(Swipe)
  .use(SwipeItem)
  .use(lazyload)

// 引入服务
import '@/service/fetch.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
