<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">            
                <app-quote>
                    <!-- Enviamos contenido html al componente para que se renderice en lugar de la etiqueta slot -->
                    <h2>{{ title }}</h2>
                    <p>A Wonderful Quote!</p>

                    <!-- Enviamos contenido con el atributo 'slot' que debe contener el name de algun slot creado en el componente hijo -->
                    <h2 slot="title">{{ title }}</h2>
                    <!-- Cuando no se especifica en que slot renderizar el contenido, por defecto se renderiza en todos los slots que no tengan un name especificado -->
                    <p slot="content">A Wonderful Quote!</p>
                </app-quote>
                <hr>
                <button @click="selected = 'appQuote'">Quote</button>
                <button @click="selected = 'appAuthor'">Author</button>
                <button @click="selected = 'appNew'">New</button>
                <p>{{ selected }}</p>
                <!-- component: Renderiza componentes de manera dinamica basandose en el contenido de una propiedad. La propiedad se especifica utilizando el atributo 'is' -->
                <component :is="selected"></component>

                <!-- keep-alive: Previene que los componentes sean destruidos cuando se cambia de componente -->
                <keep-alive>
                    <component :is="selected"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Author from './components/Author.vue';
    import New from './components/New.vue';
    import Quote from './components/Quote.vue';

    export default {
        data: function() {
            return {
                title: 'The Quote',
                selected: 'appQuote',
            };
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New,
        },
    }
</script>

<style scoped>
    h2 { 
        font-weight: bold;
    }
</style>
