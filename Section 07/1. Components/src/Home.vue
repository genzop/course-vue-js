<template>
    <div>
        <app-server-status v-for="server in 5" :key="server"></app-server-status>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';

    export default {
        // En la propiedad 'componentes' se registran de manera local los componentes utilzados
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>