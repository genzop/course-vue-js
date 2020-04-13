<template>
    <div>
        <p>Double is: {{ counterDouble }}</p>
        <p>String is: {{ counterString }}</p>
    </div>    
</template>

<script>
    // Importa el helper "mapGeters" desde la libreria de "vuex"
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            // mapGetters: permite importar multiples getters desde el state global como computed properties
            ...mapGetters([
                'counterDouble',
                'counterString'
            ]),
        },
    }
</script>