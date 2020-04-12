<template>
    <div>
        <h1>The User Page</h1>
        <!-- Para renderizar rutas anidadas es necesario especificar un nuevo 'router-view' -->
        <router-view></router-view>        
        <button class="btn btn-primary" @click="navigateHome">Go to Home</button>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateHome() {
                // Redireccion por codigo
                this.$router.push({ name: 'home' });
            }
        }        
    }
</script>