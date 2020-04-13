// Importar paquetes necesarios
import Vue from 'vue';
import Vuex from 'vuex';

// Importar modulos externos
import counter from './modules/counter';

// Importar todas las propiedades externas que no hayan sido declaradas en un modulo
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

// Configura la instancia de Vue para que utilice "vuex"
Vue.use(Vuex);

// Exporta el store para que pueda ser utilizado en el resto de la aplicacion
export const store = new Vuex.Store({
    state: {
        value: 0,
    },
    getters,
    mutations,
    actions,
    // Configurar todos los modulos externos
    modules: {
        counter,
    }
});