<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input type="text" v-model="filter">
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    // Es necesario importar un mixin
    import { fruitMixin } from './../mixins/fruit';

    export default {
        // Para utilizar un mixin solo hace falta especificarlo en la propiedad mixins        
        mixins: [fruitMixin],
        // Las propiedades del componente siempre son mas importantes que las de un mixin, por ello son ejecutadas una vez que se ejecuto el mixin
        created() {
            console.log('Inside List Created Hook!');
        },
    }
</script>

<style>

</style>
