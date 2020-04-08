<template>
    <!-- Un componente debe exportar un elemento base -->
    <div>
        <p>Server Status: {{ status }}</p>
        <hr>
        <button @click="change">Change Status</button>
    </div>
</template>

<script>
    export default {
        // En un componente la propiedad data debe devolver una funcion
        data: function() {
            return {
                status: 'Critical',
            };
        },
        methods: {
            // Declaracion de metodo de manera abreviada
            change() {
                this.status = 'Normal';
            }
        }
    }
</script>