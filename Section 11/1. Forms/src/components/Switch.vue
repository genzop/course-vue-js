<template>
    <div>
        <div id="on" @click="switched(true)" :class="{active: value}">On</div>
        <div id="off" @click="switched(false)" :class="{active: !value}">Off</div>
    </div>
</template>

<script>
    export default {
        // Para utilizar el atributo v-model, un componente personalizado debe cumplir dos reglas
        props: {
            // 1. Recibir como 'props' el value, puede ser cualquier tipo de dato            
            value: Boolean,
        },
        methods: {
            switched(isOn) {
                // 2. Emitir el evento 'input' con el nuevo valor cuando este cambie
                this.$emit('input', isOn);
            }
        },
    }
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>