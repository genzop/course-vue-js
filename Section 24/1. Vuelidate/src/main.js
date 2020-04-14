import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// Importar libreria
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-course-69911.firebaseio.com/'

// Configurar la instancia de Vue para que utilice "Vuelidate"
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
