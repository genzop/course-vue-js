<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    // Importa el helper "mapMutations" desde la libreria de "vuex"
    import { mapMutations } from 'vuex';

    export default {
        methods: {
            // mapMutations: permite importar multiples mutations del state
            ...mapMutations([
                'increment',
                'decrement'
            ]),
        }
    }
</script>