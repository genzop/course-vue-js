<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectBlue">Load Blue Template</button>
                <button class="btn btn-success" @click="selectGreen">Load Green Template</button>
                <button class="btn btn-danger" @click="selectRed">Load Red Template</button>
                <hr>
                <keep-alive>
                    <component :is="current">
                        <slot slot="title">
                            <h2>{{ title }}</h2>                            
                        </slot>
                        <slot slot="content">
                            <p>{{ content }}</p>                            
                        </slot>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                current: 'appBlue',
                title: 'BLUE',
                content: 'Im blue dabadee dabadai'
            };
        },
        methods: {
            selectBlue() {
                this.current = 'appBlue';
                this.title = 'BLUE';
                this.content = 'Im blue dabadee dabadai';
            },
            selectGreen() {
                this.current = 'appGreen';
                this.title = 'GREEN';
                this.content = 'Hulk Smash';
            },
            selectRed() {
                this.current = 'appRed';
                this.title = 'RED';
                this.content = 'Hi! My name is Red';
            },
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
