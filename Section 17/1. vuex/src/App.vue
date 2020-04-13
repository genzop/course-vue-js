<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>
                <hr>
                <input type="text" v-model="value">
                <p>Value: {{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';

    export default {
        computed: {
            // Para vincular una propiedad del state con "v-model" es necesario especificar un getter y un setter en el computed property
            value: {
                get() {
                    return this.$store.getters.value;
                },
                set(value) {
                    // Ejecutar un action manualmente
                    this.$store.dispatch('updateValue', value);
                }
            },            
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter,
        }
    }
</script>

