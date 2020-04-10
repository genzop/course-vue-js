<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Para utilizar un filter, se ingresa la propiedad a mostrar y luego se pueden ir encadenando los diferentes filters separados por | -->
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <input type="text" v-model="filter">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
                <!-- Cuando se modifica una propiedad de un mixin, solo se modifica en la instancia generada para ese componente -->
                <button @click="fruits.push('Watermelon')">Add New</button>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './components/List.vue';
    import { fruitMixin } from './mixins/fruit';

    export default {
        data() {
            return {
                text: 'Hello there!',
            };
        },
        // Filters: permiten modificar informacion cuando se muestra al usuario. Asi se registran de manera local
        filters: {
            // Recibe como parametro el 'value' y debe retornar algo
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        // Un mixin automaticamente se mezcla con las propiedades que ya estan declaradas
        mixins: [fruitMixin],
        components: {
            appList: List,
        }
    }
</script>

<style>

</style>
