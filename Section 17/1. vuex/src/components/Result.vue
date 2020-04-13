<template>
    <div>
        <p>Counter is: {{ counter }}</p>
    </div>     
</template>

<script>
    export default {
        // Las propiedades obtenidas de un state global siempre deberian ser manejadas como computed
        computed: {
            counter() {
                // Obtiene el valor de "state" global
                return this.$store.state.counter.counter;
            },            
        },
    }
</script>