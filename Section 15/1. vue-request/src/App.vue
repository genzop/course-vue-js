<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="node">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="getUsers">Get Users</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(user, index) in users" :key="index">{{ user.username }} - {{ user.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resouce: {},
                node: 'data',
            };
        },
        methods: {
            submit() {    
                // Envia un POST request a Firebase. Parametros: url, data                
                /* this.$http.post('data.json', this.user)
                          // Espera a que se complete el promise 
                          .then(response => {
                              console.log(response);
                          // El promise puede devolver como segundo parametro un error
                          }, error => {
                              console.log(error);
                          }); */
                
                // Utiliza el recurso configurado para simplificar la llamada
                /* this.resource.save({}, this.user);*/

                // Utiliza el endpoint personalizado
                this.resource.saveAlt(this.user);
            },
            getUsers() {
                // Envia un GET request a Firebase. Parametros: url
                /* this.$http.get('data.json')
                          // Espera a que se complete el promise
                          .then(response => {
                              // El metodo .json devuelve el contenido de la respuesta como json pero dentro de un promise
                              return response.json();
                          })
                          .then(data => {
                              const result = [];
                              for (let key in data) {
                                  result.push(data[key]);
                              }
                              this.users = result;
                          }); */
                this.resource.getData({ node: 'data' })
                             .then(response => {
                                 // El metodo .json devuelve el contenido de la respuesta como json pero dentro de un promise
                                 return response.json();
                             })
                             .then(data => {
                                 const result = [];
                                 for (let key in data) {
                                     result.push(data[key]);
                                 }
                                 this.users = result;
                             });
            }
        },
        created() {
            // Crea una lista de endpoints personalizados para el recurso
            const custom = {
                saveAlt: { method: 'POST', url: 'alternative.json' },
                getData: { method: 'GET' },
            };

            // Configura como recurso cierto endpoint en la API, un objeto vacio y la lista de endpoints personalizados
            this.resource = this.$resource('{node}.json', {}, custom);
        },
    }
</script>

<style>
</style>
