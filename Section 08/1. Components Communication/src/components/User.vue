<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="change">Change Name</button>
        <p>Current name: {{ name }}</p>
        <p>Current age: {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- Envio la propiedad 'name' al componente UserDetail -->
                <!-- Escucha al evento 'nameResetted' y utiliza el parametro recibido para guardarlo en la propiedad 'name' -->
                <!-- Envia como prop la function 'reset' para actualizar el 'name' desde el componente hijo -->
                <app-user-detail :name="name" @nameResetted="name = $event" :resetFn="reset" :age="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :age="age"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Enzo',
                age: 24,
            };
        },
        methods: {
            change() {
                this.name = 'Gino';
            },
            reset() {
                this.name = 'Enzo';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
