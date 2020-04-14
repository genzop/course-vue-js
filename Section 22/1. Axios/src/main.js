import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

// Configura la URL base para todas las llamadas de Axios
axios.defaults.baseURL = 'https://vue-course-69911.firebaseio.com/';
// Configura el header "Authorization" para todos los requests
axios.defaults.headers.common['Authorization'] = 'asdfasdf';
// Configura el header "Accepts" para requests GET
axios.defaults.headers.get['Accepts'] = 'application/json';

// Intercepta todas los requests antes de ser ejecutados y guarda el id del interceptor en una variable
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config);
  // Siempre se debe devolver la configuracion
  return config;  
});

// Intercepta todas los responses y guarda el id del interceptor en una variable
const resInterceptor = axios.interceptors.response.use(response => {
  console.log('Response Interceptor', response);
  // Siempre se debe devolver el response
  return response;
});

// Elimina un interceptor configurado anteriormente
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
