// Exporta un action de manera individual, sin que pertenezca a ningun modulo
export const updateValue = ({ commit }, payload) => {
    commit('updateValue', payload);
};