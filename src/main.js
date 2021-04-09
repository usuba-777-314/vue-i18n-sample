import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'

Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'ja',
  messages: {
    ja: {},
    en: {}
  }
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
