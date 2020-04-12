<template>
    <div>
        <h3>Edit the User</h3>
        <!-- Obtener Query Strings -->
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Q: {{ $route.query.q }}</p>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Some extra data</p>
    </div>    
</template>

<script>
    export default {
        data() {
            return {
                confirmed: false,
            }
        },
        // Ejecutar validacion antes de abandonar el componente
        beforeRouteLeave (to, from, next) {
            if (this.confirmed) {
                next();
            } else {
                if (confirm('Are you sure?')) {
                    next();
                } 
            }
        }
    }
</script>