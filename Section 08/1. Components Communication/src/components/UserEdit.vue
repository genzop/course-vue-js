<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ this.age }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    // Importa el EventBus
    import { eventBus } from '../main.js';

    export default {
        props: ['age'],
        methods: {
            editAge() {
                this.age = 25;
                // Emite un evento en el EvetBus
                eventBus.$emit('ageEdited', this.age);
                // Consumir logica interna del EventBus
                eventBus.changeAge(28);
            }
        },
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
