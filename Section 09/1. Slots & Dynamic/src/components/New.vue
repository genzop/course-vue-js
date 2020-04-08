<template>
    <div>
       <h3>New Quote</h3>
       <button @click="counter++">Increase</button>
       <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0,
            };
        },
        destroyed() {
            console.log('Destroyed!');
        },
        // Ocurre cuando un componente dinamico se encuentra dentro de la etiqueta 'keep-alive' y el componente actual pierde el foco
        deactivated() {
            console.log('Deactivated');
        },
        // Ocurre cuando un componente dinamico se encuentra dentro de la etiqueta 'keep-alive' y el componente actual gana el foco
        activated() {
            console.log('Activated');
        },
    }
</script>

<style scoped>
</style>