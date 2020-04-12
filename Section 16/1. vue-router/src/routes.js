// Importar los componentes a los que se quiera routear
import Home from './components/Home.vue';
import Header from './components/Header.vue';

// Importar de manera "lazy" los componentes a medida de que sean necesarios
// require.ensure: el tercer parametro es el "Grupo" al que pertenece cada componente. Este es opcional y se utiliza en caso de que se quieran cargar varios componentes en el mismo paquete.
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};

// Exporta un array de las posibles rutas
export const routes = [
    // Al existir multiples "router-view" se debe especificar que componente se debe renderizar en cada uno
    { path: '', name: 'home', components: {
        'default': Home,
        'header-top': Header
    } },
    // Declara una ruta y un conjunto de rutas anidadas
    { path: '/user', components: {
        'default': User,
        'header-bottom': Header    
    // Declara todas las rutas anidades que pueden existir dentro de User
    }, children: [
        { path: '', component: UserStart },
        // Especificar un contenido dinamico, en este caso un id y especifica que puede ser recibido por props
        // Ejecutar validacion antes de ingresar a una ruta en particular
        { path: ':id', component: UserDetail, props: true, beforeEnter: (to, from, next) => {
            console.log('Inside route beforeEnter')
            next()
        }},
        // El parametro "name" permite redireccionar a esa ruta sin tener que escribirla a mano
        { path: ':id/edit', component: UserEdit, props: true, name: 'userEdit' },
    ]},
    // Redirecciona todos los request a rutas no registradas
    { path: '*', redirect: { name: 'home' } }
];