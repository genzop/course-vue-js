<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <section>
                    <h2>CSS Animations</h2>
                    <hr>
                    <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                    <br><br>
                    <!-- transition: es una etiqueta que permite animar la etiqueta en su interior. El campo 'name' es el nombre de la animacion y solo puede contener 1 etiqueta -->
                    <transition name="fade">
                        <div class="alert alert-info" v-if="show">This is some info</div>
                    </transition>
                    <!-- type: si se utilizan animations y transitions al mismo tiempo y estos tienen duraciones diferentes, pueden generarse bugs visuales
                            Para solucionarlo, se debe especificar cual es el tipo de efecto que determina la duracion total -->
                    <transition name="slide" type="animation">
                        <div class="alert alert-info" v-if="show">This is some info</div>
                    </transition>
                    <hr>
                    <!-- Tambien pueden utilizarse con 'v-show' -->
                    <transition name="slide" type="animation">
                        <div class="alert alert-info" v-show="show">This is some info</div>
                    </transition>
                    <hr>
                    <!-- appear: habilita las transitions cuando el elemento es visible desde un principio -->
                    <transition name="fade" appear>
                        <div class="alert alert-info" v-if="show">This is some info</div>
                    </transition>
                    <hr>
                    <h4>Animate.css</h4>
                    <!-- En caso de usar librerias de animaciones externas, es posible especificar directamente que clases utilizar -->
                    <transition appear enter-active-class="animated bounce" leave-active-class="animated shake">
                        <div class="alert alert-info" v-if="show">This is some info</div>
                    </transition>
                    <hr>
                    <h4>Dynamic Transition</h4>
                    <select v-model="type" class="form-control">
                        <option value="fade">Fade</option>
                        <option value="slide">Slide</option>
                    </select>
                    <br>
                    <!-- Es posible especificar que efecto utilizar a traves de una propiedad, solo hace falta vincular el atributo 'name' a alguna propiedad -->
                    <transition :name="type">
                        <div class="alert alert-info" v-if="show">This is some info</div>
                    </transition>
                    <hr>
                    <!-- mode: permite especificar si queremos esperar a que un efecto termine antes de disparar el otro. En este caso se espera a que se termine el leave y luego el enter -->
                    <transition name="fade" mode="out-in">
                        Cuando un transition contiene multiples elementos que alternan entre si, es necesario especificar un 'key' unico para que el efecto se aplice a ambos elementos
                        <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                        <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                    </transition>
                </section>
                <hr>
                <section>
                    <h2>JS Animations</h2>
                    <button class="btn btn-primary" @click="load = !load">Load Alert</button>
                    <br><br>
                    <!-- Un transition provee distintos hooks a los que podemos escuchar cuando se ejecutan animaciones/logica por JS -->
                    <!-- css: le indica al transition si debe buscar animaciones de css vinculadas -->
                    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled"
                                @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @@leave-cancelled="leaveCancelled"
                                :css="false">
                        <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
                    </transition>
                    <hr>
                    <h4>Dynamic Component</h4>
                    <button class="btn btn-primary" @click="toggleComponent">Toggle Component</button>
                    <br><br>
                    <transition name="fade" mode="out-in">
                        <component :is="selected"></component>                        
                    </transition>
                    <hr>
                    <h4>Animating Lists</h4>
                    <button class="btn btn-primary" @click="addItem">Add Item</button>
                    <br><br>
                    <!-- Es posible animar una lista de elementos -->
                    <ul class="list-group">
                        <transition-group name="slide">
                            <li class="list-group-item" v-for="(number, index) in numbers" :key="number" @click="removeItem(index)" style="cursor: pointer;">{{ number }}</li>                            
                        </transition-group>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import AlertDanger from './components/AlertDanger.vue';
    import AlertSuccess from './components/AlertSucess.vue';

    export default {
        data() {
            return {
                show: false,
                type: 'fade',
                load: true,
                width: 300,
                selected: 'app-alert-success',
                numbers: [1, 2, 3, 4, 5],
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
                this.width = 100;
                el.style.width = this.width + 'px';
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.width + round * 10) + 'px';
                    round++;

                    if(round > 20){
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter() {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                console.log('beforeLeave');
                this.width = 300;
                el.style.width = this.width + 'px';
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.width - round * 10) + 'px';
                    round++;

                    if(round > 20){
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
            toggleComponent() {
                this.selected = this.selected == 'app-alert-danger' ? 'app-alert-success' : 'app-alert-danger';
            },
            addItem() {
                this.numbers.push(this.numbers[this.numbers.length - 1] + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            },
        },
        components: {
            appAlertDanger: AlertDanger,
            appAlertSuccess: AlertSuccess,
        }
    }
</script>

<style>
    /* Mostrar: momento apenas comienza la animacion */
    .fade-enter {
        opacity: 0;
    }
    /* Mostrar: momento mientras dura la animacion */
    .fade-enter-active {
        transition: opacity 1s;
    }
    /* Remover: momento apenas comienza la animacion */
    .fade-leave {

    }
    /* Remover: momento mientras dura la animacion */
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    /* Animaciones con CSS */
    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }
    /* Animacion para el contenedor de la lista de elementos */
    .slide-move {
        transition: transform 1s;
    }
    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0px);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(20px);
        }        
    }
</style>
