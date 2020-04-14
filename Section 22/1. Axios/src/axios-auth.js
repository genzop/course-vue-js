import axios from 'axios'

// Crea una instancia separada de Axios para los casos en que se necesite tener una configuracion diferente a la global
const instance = axios.create({
    baseURL: 'https://vue-course-69911.firebaseio.com/'
})
instance.defaults.headers.common['Something'] = 'Something';

export default instance