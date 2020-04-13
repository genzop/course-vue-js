<template>
    <div>
        <h4>Aync</h4>
        <button class="btn btn-primary" @click="asyncIncrement({ step: 50, timer: 500 })">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({ step: 50, timer: 500 })">Decrement</button>
    </div>
</template>

<script>
    // Importa el helper "mapActions" desde la libreria de "vuex"
    import { mapActions } from 'vuex';

    export default {
        methods: {
            // mapActions: permite importar multiples actions del state
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ]),
        }
    }
</script>