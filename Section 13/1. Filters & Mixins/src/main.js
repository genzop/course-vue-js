import Vue from 'vue'
import App from './App.vue'

// Filter registrado de manera global
Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

// Mixin registrado de manera global, no es muy recomendado
Vue.mixin({
  created() {
    console.log('Global mixin created hook!');
  },
})

new Vue({
  el: '#app',
  render: h => h(App)
})
