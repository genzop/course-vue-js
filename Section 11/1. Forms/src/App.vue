<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <!-- v-model: vincula bidireccionalmente un input con una propiedad. Por defecto esta se actualiza con cada cambio -->
                        <input type="text" id="email" class="form-control" v-model="user.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <!-- Input Modifiers: permiten cambiar el funcionamiento del atributo 'v-model'. Pueden encadenarse todos los que se crean necesarios -->
                        <!-- lazy = la propiedad solo se actualiza cuando el input pierde el foco -->
                        <input type="password" id="password" class="form-control" v-model.lazy="user.password">
                        <p>Password: {{ user.password }}</p>
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input type="number" id="age" class="form-control" v-model="user.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea id="message" rows="5" class="form-control" v-model="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input type="checkbox" id="sendmail" value="SendMail" v-model="sendEmail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="sendEmail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input type="radio" id="male" value="Male" v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input type="radio" id="female" value="Female" v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select id="priority" class="form-control" v-model="priority">
                        <option v-for="item in priorities" :key="item">{{ item }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <!-- Para utilizar 'v-model' con un componente personalizado solo es necesario configurarlo desde el componente -->
                    <app-switch v-model="switched"></app-switch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button class="btn btn-primary" @click.prevent="submitForm">Submit!</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="formSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ user.email }}</p>
                        <p>Password: {{ user.password }}</p>
                        <p>Age: {{ user.age }}</p>
                        <!-- 'white-space: pre': muestra el contenido de un text-area respetando los saltos de linea ingresados -->
                        <p class="white-space: pre">Message: {{ message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendEmail" :key="item">{{ item }}</li>
                        </ul>
                        <p>Gender: {{ gender }}</p>
                        <p>Priority: {{ priority }}</p>
                        <p>Switched: {{ switched }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from './components/Switch.vue';

    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    age: 23
                },
                message: 'A new Text',
                sendEmail: [],
                gender: 'Male',
                priorities: ['Low', 'Medium', 'High'],
                priority: 'Low',
                switched: true,
                formSubmitted: false
            };
        },
        methods: {
            submitForm() {
                this.formSubmitted = true;
            }
        },
        components: {
            appSwitch: Switch
        }
    }
</script>

<style>

</style>
