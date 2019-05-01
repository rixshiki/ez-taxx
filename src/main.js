import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './vuex/store'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,
  
}).$mount('#app')

