<template>
    <div>
        <h3>Some User Details</h3>
        <p>User ID: {{ id }} or {{ idToo }}</p>
        <!-- Redireccionar utilizando el nombre de la ruta permite evitar tener que escribir toda la ruta a mano -->
        <router-link :to="{ name: 'userEdit', params: { id } }" tag="button" class="btn btn-primary">Edit</router-link>
        <!-- Misma ruta pero incluyendo Query Strings -->
        <router-link :to="link" tag="button" class="btn btn-primary">Edit</router-link>
    </div>    
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                // Obtiene un parametro especificado en la ruta desde la url
                idToo: this.$route.params.id,
                link: {
                    name: 'userEdit', 
                    params: { 
                        id: this.id,
                    }, 
                    query: { 
                        locale: 'es', 
                        q: 100 
                    },
                    // Especifica un id para poner en la url y scrollear hasta ese elemento
                    hash: '#data'
                }
            }
        },
        props: {
            // Obtiene un parametro especificado en la ruta desde la url pero dentro de los props
            id: {
                type: String,
                default: ''
            },
        },
        // En caso de redireccionar al mismo componente pero con otro parametro, es necesario actualizar la propiedad manualmente
        watch: {
            '$route'(to, from) {
                this.idToo = to.params.id;
            }
        },
        // Ejecutar validacion de ingreso en el componente. El componente aun no es renderizado por lo que no se puede acceder a propiedades del componente
        beforeRouteEnter (to, from, next) {
            next();
        }
    }
</script>