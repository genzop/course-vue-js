import Vue from 'vue'
import App from './App.vue'

// Custom Directive: es posible crear directives personalizados para utilizarlas. Este ejemplo registra el directive 'highlight' de manera global
Vue.directive('highlight', {
  // Hooks: es uno de los hooks disponibles de un directive. Estos hooks funcionan de manera similar a los lifecycle hooks de un componente
  // bind: cuando el directive es vinculado al componente
  bind(el, binding, vnode) {    
    var delay = 0;

    // binding.modifiers['']: revisa si se especifico algun modifier y permite realizar alguna accion en caso de que asi sea
    if(binding.modifiers['delayed']) {
      delay = 2000;
    }

    setTimeout(() => {
      // binding.arg: permite revisar que tipo de parametro se esta recibiendo
      if(binding.arg == 'background'){
        // binding.value: permite acceder al valor pasado como parametro a este directive. Este es opcional
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;      
      }  
    }, delay);    
  },

  // inserted: cuando el componente es insertado en el DOM
  inserted(el, binding, vnode) { },

  // update: cuando el componente es actualizado sin incluir a los nodos hijos
  update(el, binding, vnode, oldVnode) { },

  // componentUpdated: cuando el componente es actualizado incluyendo a los nodos hijos
  componentUpdated(el, binding, vnode, oldVnode) { },

  //unbind: cuando el directive es removido
  unbind(el, binding, vnode) { }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
