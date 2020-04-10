<template>
    <div class="container">
        <!-- Exercise 1 -->
        <!-- Create a Signup Form where you retrieve the following Information -->
        <!-- Full Name (First Name + Last Name) -->
        <!-- Mail -->
        <!-- Password -->
        <!-- Store Data? Yes/No -->

        <!-- Exercise 2 -->
        <!-- Only display the Form if it has NOT been submitted -->
        <!-- Display the Data Summary ONCE the Form HAS been submitted -->

        <!-- Exercise 3 -->
        <!-- Edit the Example from above and create a custom "Full Name" Control -->
        <!-- which still holds the First Name and Last Name Input Field -->

        <form v-if="!submitted">
            <h3>Signup Form</h3>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">         
                    <app-name v-model="name"></app-name>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input type="email" class="form-control" v-model="mail">
                    </div>    
                    <div class="form-group">
                        <label for="email">Password</label>
                        <input type="password" class="form-control" v-model="password">
                    </div>            
                    <div class="form-group">
                        <label for="male">
                            <input type="radio" id="male" value="Yes" v-model="store"> Yes
                        </label>
                        <label for="female">
                            <input type="radio" id="female" value="No" v-model="store"> No
                        </label>
                    </div> 
                    <button class="btn btn-primary" @click.prevent="submitted = true">Submit</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ name }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Name from './components/Name.vue';

    export default {
        data() {
            return {
                name: 'Enzo Panettieri',
                mail: '',
                password: '',
                store: 'No',
                submitted: false
            };
        },
        components: {
            appName: Name,
        }
    }
</script>

<style>
</style>
