<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some text content'"></p>
                <p v-html="'<b>Some html content</b>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <h4>Global Directives</h4>
                <!-- Utiliza el custom directive 'highlight' que fue registrado globalmente -->
                <p v-highlight="'red'">Color this</p>
                <!-- Especifica que el parametro enviado es de tipo background. Este es un tipo personalizado elegido por el programador -->
                <p v-highlight:background="'red'">Color this</p>
                <!-- Especifica que el parametro enviado tiene un modifier 'delayed'. Este es un modifier personalizado elegido por el programador -->
                <p v-highlight:background.delayed="'red'">Color this</p>
                <hr>
                <h4>Local Directives</h4>
                <!-- Una directiva tambien puede recibir como parametro un objeto -->
                <p v-local-highlight:background.delayed.blink="{primary: 'blue', secondary: 'green', delay: 1500}">Color this also</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    let delay = 0;

                    if(binding.modifiers['delayed']) {
                        delay = 2000;
                    }

                    if(binding.modifiers['blink']) {
                        let primary = binding.value.primary;
                        let secondary = binding.value.secondary;
                        let current = primary;
                        setInterval(() => {
                            current = current === primary ? secondary : primary;
                            if(binding.arg == 'background'){
                                el.style.backgroundColor = current;
                            } else {
                                el.style.color = current;      
                            }  
                        }, binding.value.delay);
                    } else {
                        setTimeout(() => {
                            if(binding.arg == 'background'){
                                el.style.backgroundColor = binding.value.primary;
                            } else {
                                el.style.color = binding.value.primary;      
                            }  
                        }, delay);    
                    }                    
                }
            }
        }
    }
</script>

<style>

</style>
