<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" :key="quote" @click.native="deleteQuote(index)">
            <h2>{{ quote }}</h2>
        </app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';

    export default {
        props: {
            quotes: Array
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            }
        },
        components: {
            appQuote: Quote
        }
    }
</script>

<style>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e6e6e;
    }

    .quote {
        cursor: pointer;        
    }
    .quote:hover {
        background-color: #ffe2e2;
    }
</style>