import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import gAxios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },

  mutations: {
    authUser (state, userData) {
      state.idToken = userData.idToken;
      state.userId = userData.userId;
    },
    storeUser (state, user) {
      state.user = user;
    },
    logout (state) {
      state.idToken = null;
      state.userId = null;
    }
  },

  actions: {
    // Registra un usuario nuevo en Firebase
    signup({ commit, dispatch }, authData) {
      axios.post('accounts:signUp?key=AIzaSyAGd2yuJusjJ4DCVgcgHs6tHcI7W1CiuMQ', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then(res => {
          console.log(res);

          // Guarda el JWT generado en el store
          commit('authUser', {
            idToken: res.data.idToken,
            userId: res.data.localId
          }); 
          
          // Calcula cuando expira el token generado
          const now = new Date();
          const expiration = new Date(now.getTime() + res.data.expiresIn * 1000);

          // Guarda el token generado en localStorage del browser
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('userId', res.data.localId);
          localStorage.setItem('expiration', expiration);

          // Guarda el usuario generado en Firebase
          dispatch('storeUser', authData)

          // Logout automatico
          dispatch('setLogoutTimer', res.data.expiresIn)
      }).catch(error => console.log(error));
    },
    // Autentica un usuario en Firebase
    login({ commit, dispatch }, authData) {
      axios.post('accounts:signInWithPassword?key=AIzaSyAGd2yuJusjJ4DCVgcgHs6tHcI7W1CiuMQ', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then(res => {
        console.log(res);        

        // Guarda el JWT encontrado en el store
        commit('authUser', {
          idToken: res.data.idToken,
          userId: res.data.localId
        }); 

        // Calcula cuando expira el token generado
        const now = new Date();
        const expiration = new Date(now.getTime() + res.data.expiresIn * 1000);

        // Guarda el token generado en localStorage del browser
        localStorage.setItem('token', res.data.idToken);
        localStorage.setItem('userId', res.data.localId);
        localStorage.setItem('expiration', expiration);

        // Logout automatico
        dispatch('setLogoutTimer', res.data.expiresIn)
      }).catch(error => console.log(error))
    },
    // Login automatico basandose en el localStorage
    autoLogin({ commit }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return 
      }

      const now = new Date()
      const expiration = localStorage.getItem('expiration')
      if (now > expiration) {
        return
      }

      const userId = localStorage.getItem('userId')
      commit('authUser', { 
        token: token,
        userId: userId
      });
    },
    storeUser({ commit, state }, userData) {      
      if (!state.idToken) {
        return
      }

      gAxios.post('/users.json?auth=' + state.idToken, userData)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    },
    getUser({ commit, state }) {
      if (!state.idToken) {
        return
      }
      gAxios.get('/users.json?auth=' + state.idToken)
        .then(res => {
          console.log(res)
          const data = res.data

          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }

          console.log(users)
          commit('storeUser', users[0]);
        }).catch(error => console.log(error))
    },
    logout({ commit }) {
      commit('logout');

      // Limpia el localStorage
      localStorage.removeItem('expiration');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');

      router.replace('/signin');
    },

    // Dispara un hilo que ejecutra el logout automaticamente una vez vencido el token
    setLogoutTimer ({ commit }, time) {
      setTimeout(() => {
        commit('logout');
      }, time * 1000)
    }
  },

  getters: {
    user (state) {
      return state.user
    },
    authenticated (state) {
      return state.idToken !== null
    }
  }
})