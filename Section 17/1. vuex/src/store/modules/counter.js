// State: datos globales para la aplicacion    
const state = {
    counter: 0,
};

// Getters: permiten unificar la manera de realizar calculos / ejecutar logica sobre propiedades del state
const getters = {
    counterDouble: state => {
        return state.counter * 2;
    },
    counterString: state => {
        return state.counter + ' Clicks';
    },
};

// Mutations: permiten realizar modificaciones en el state
const mutations = {
    // Un mutation puede recibir solo el state como parametro y tambien puede recibir una propiedad / objeto
    increment: (state, payload) => {
        state.counter += payload;    
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    },
};

// Actions: permiten ejecutar logica de manera async antes de mutar el state. Se recomienda siempre utilizar actions para consumir mutations
const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.step);                
        }, payload.timer);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.step);                
        }, payload.timer);
    },
};

// Exporta el modulo de "counter" para ser importado en el store global
export default {
    state, 
    getters,
    mutations,
    actions
}