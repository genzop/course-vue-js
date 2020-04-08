<template>
    <div>
        <!-- slot: Renderiza todo el contenido html que se escriba dentro de las etiquetas del componente. -->
        <slot></slot>
        <span style="color: #ccc">
            <!-- Un slot puede contener contenido por defecto que se utilizara en caso de recibir contenido especifico para ese slot -->
            <slot name="subtitle">The Subtitle</slot>
        </span>
        <hr>
        <div class="title">
            <!-- Tambien se puede recibir multiples slots, para ello es necesario definir un 'name' para cada uno -->
            <slot name=title></slot>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px #000;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2 {
        color: #f00;
    }

    .title {
        font-style: italic;
    }
</style>