import Vue from 'vue'
// Importar la libreria 'vue-router'
import VueRouter from 'vue-router'
import App from './App.vue'
// Importar el array de rutas configuradas
import { routes } from './routes'

// Configurar la instancia de Vue para que utilice 'vue-router'
Vue.use(VueRouter)

// Crea una nueva instancia de VueRouter importando las rutas configuradas
const router = new VueRouter({ 
  routes,
  // Este modo se configura cuando queremos que las urls no contengan un #
  // Para que esto funcione correctamente es necesario configurar el server para que siempre retorne el archivo index.html
  // Asi Vue siempre es cargado y por lo tanto puede manejar todo tipo de rutas
  // El mode por defecto es hash. De esta manera todos los request posteriores al primero no son enviados al server
  mode: 'history',
  // Configurar el comportamiento del scroll en redirecciones
  scrollBehavior(to, from, savedPosition) {
    // La posicion guardada tiene prioridad
    if (savedPosition) {
      return savedPosition;
    }
  // Scrollear al elemento indicado en la url
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

// Realizar validaciones antes de todas las urls
router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  /* La funcion next puede recibir los siguientes parametros:
      '': sigue con la ruta original
      false: impide el acceso a la url
      'path': redirecciona al path
      {ruta}: redirecciona a la ruta 
  */
  next();
});

new Vue({
  el: '#app',
  // Establece como router la instancia de VueRouter creada anteriormente
  router,
  render: h => h(App)
})
