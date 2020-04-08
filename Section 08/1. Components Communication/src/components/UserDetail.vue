<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>User Name: {{ reverse() }}</p>
        <p>User Age: {{ age }}</p>
        <button @click="reset">Reset Name</button>
        <!-- Utiliza la function 'resetFn' que fue recibida como prop -->
        <button @click="resetFn">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        // props: Array o objeto de propiedades que son recibidas del componente padre
        props: {
            // Cuando utilizamos un objeto, se pueden agregar validaciones para cada prop
            name: {
                type: String,                
                required: false,
                default: 'Enzo'
            },
            resetFn: Function,
            age: Number,
        },
        methods: {
            reverse() {
                // Un prop puede ser utilizado en cualquier lado del componente
                return this.name.split('').reverse().join('');
            },
            reset() {
                // Emite el event llamado 'nameResetted' con el parametro 'Enzo'. Este evento puede escucharse en toda la instancia de Vue.
                this.$emit('nameResetted', 'Enzo');
            }
        },
        created() {
            // Crea un handler que esta escuchando al evento 'ageEdited' en el eventBus
            eventBus.$on('ageEdited', (data) => {
                this.age = data;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
