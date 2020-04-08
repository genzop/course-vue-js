import Vue from 'vue'
import App from './App.vue'

// Exporta una nueva instancia de Vue que funcionara como un manejador de eventos
export const eventBus = new Vue({
  methods: {
    // Tambien puede contener logica interna que sera accesible en toda la aplicacion
    changeAge(age) {
      this.$emit('ageEdited', age);
    }
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
})