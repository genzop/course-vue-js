<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    // Arquitectura recomendada para componentes: '/components/entidad/archivos' o '/components/seccion/entidad/archivos'
    import Footer from './components/Shared/Footer.vue';
    import Header from './components/Shared/Header.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
    import Servers from './components/Server/Servers.vue';

    export default {
        components: {
            AppFooter: Footer,
            AppHeader: Header,
            AppServerDetails: ServerDetails,
            AppServers: Servers
        }
    }
</script>

<style>

</style>
