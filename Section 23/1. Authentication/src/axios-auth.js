import axios from 'axios'

// Instancia configurada para crear/autenticar usuarios en Firebase
const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/'
})

export default instance