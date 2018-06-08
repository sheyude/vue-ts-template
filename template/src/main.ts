import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import VueI18n from 'vue-i18n'

import zhCN from './lang/zh-cn/index'
import EN from './lang/en/index'

Vue.use(VueI18n)

Vue.config.productionTip = false

/*---------使用语言包-----------*/


const i18n = new VueI18n({
  locale:'zh-cn', // 语言标识
  messages: {
    'zh-cn': Object.assign(zhCN), // 中文语言包
    'en': Object.assign(EN) // 英文语言包
  },
})

/* eslint-disable no-new */
const init = new Vue({
  el: '#app',
  // i18n,
  store,
  router,
  render: h => h(App)
})
