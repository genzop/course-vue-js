import Vue from 'vue'
// Importar la libreria 'vue-resource'
import VueResource from 'vue-resource'
import App from './App.vue'

// Configurar que Vue utilice la libreria 'vue-resource'
Vue.use(VueResource);
// Configura la url base para todas las llamadas por ajax
Vue.http.options.root = 'https://vue-course-69911.firebaseio.com/';
// Es posible interceptar todas las llamadas por ajax realizadas. Interceptors es un array de funciones que se ejecutan cada vez que se ejecuta una llamada de ajax
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST') {
    request.method = 'PUT';  
  }

  // Tambien es posible interceptar las respuestas. La funcion "next" siempre debe ejecutarse cuando se intercepta un request
  next(response => {
    response.json = () => {
      return { messages: response.body };
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
