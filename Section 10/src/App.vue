<template>
    <div class="container">
        <app-header :count="quotes.length" :max="max"></app-header>
        <app-quote-form @quoteSaved="addQuote"></app-quote-form>
        <app-quote-list :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-list>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import QuoteForm from './components/QuoteForm.vue';
    import QuoteList from './components/QuoteList.vue';

    export default {
        data: function() {
            return {
                max: 10,
                quotes: [
                    'Just a simple quote',
                ]
            };
        },
        methods: {
            addQuote(quote) {
                if(this.quotes.length >= this.max) {
                    return alert('You have to delete some quotes to add more!');
                }
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appHeader: Header,
            appQuoteForm: QuoteForm,
            appQuoteList: QuoteList,
        },
    }
</script>

<style>
</style>
