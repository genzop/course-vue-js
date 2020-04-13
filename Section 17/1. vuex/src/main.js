import Vue from 'vue'
import App from './App.vue'
// Importar el store general
import { store } from './store/store.js'

new Vue({
  el: '#app',
  // Configurar el store en la instancia de Vue
  store,
  render: h => h(App)
})
