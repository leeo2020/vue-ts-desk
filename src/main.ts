import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Cate from '@/model/Cate'
import DataItem from '@/model/DataItem'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const dataItem=new DataItem(1,Cate.study,'Hello','You are the Apple of my eye!',19)
console.log(dataItem)