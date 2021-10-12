import Vue from 'vue'
import App from './App.vue'
// 引入去全局样式
import  'bootstrap/dist/css/bootstrap.min.css'
// 全局组件
import Counter from './components/counter.vue'

Vue.component('Count',Counter)
Vue.config.productionTip = false

import axios  from 'axios'
axios.defaults.baseURL='https://www.escook.cn'
new Vue({
  render: h => h(App),
}).$mount('#app')
