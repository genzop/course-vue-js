<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button class="btn btn-primary" v-customOn:click="clicked">Click Me!</button>
                <div class="box" v-customOn:mouseenter="enter" v-customOn:mouseleave="leave"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            customOn: {
                bind(el, binding) {
                    el.addEventListener(binding.arg, binding.value);
                }
            }
        },
        methods: {
            clicked() {
                console.log('I was clicked!');
            },
            enter() {
                console.log('Hi!');
            },
            leave() {
                console.log('Goodbye!');
            }
        },
    }
</script>

<style>
    .box {
        width: 100px; 
        height: 100px; 
        background: teal;
    }
</style>
