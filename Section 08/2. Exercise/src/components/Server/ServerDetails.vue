<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{ server.id }} selected. Status: {{ server.status }}</p>
        <hr>
        <button @click="change">Change to Normal</button>
    </div>

</template>

<script>
    import { eventBus } from '../../main.js';

    export default {
        data: function() {
            return {
                server: null,
            };
        },
        methods: {
            change() {
                // No es necesario emitir un evento para actualizar esto en el resto de la aplicacion ya que al ser un objeto o un array, esta es una variable de referencia por lo que solo esta una vez en memoria
                this.server.status = 'Normal';
            },
        },
        created() {
            eventBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        },
    }
</script>

<style>

</style>
