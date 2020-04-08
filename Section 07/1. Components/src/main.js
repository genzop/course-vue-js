import Vue from 'vue'
import App from './App.vue'
// Importa el componente Home
import Home from './Home.vue'

// Registra el componente de manera global. El primer parametro es la etiqueta con la que se va a utilizar, y el segundo es la referencia al componente importado
Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
