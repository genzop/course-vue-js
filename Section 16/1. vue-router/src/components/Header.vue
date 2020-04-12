<template>
    <ul class="nav nav-tabs">        
        <!-- router-link: link a una url pero donde el redireccionamiento es manejado por VueRouter            
                tag: etiqueta html que se utilizara
                active-class: clase que se adjuntara al elemento cuando esta sea la ruta actual
                exact: demanda que la ruta sea exactamente la especificada y que no la contenga -->
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
    </ul>
</template>
