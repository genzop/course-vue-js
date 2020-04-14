<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <!-- Aplica la clase "invalid" cuando el email no cumple las validaciones -->
        <div class="input" :class="{invalid: $v.email.$error}">
          <label for="email">Mail</label>
          <!-- $v.propiedad.$touch(): habilita las validaciones configuradas en este input. Esto se puede hacer en cualquiera de los eventos disponibles -->
          <input type="email" id="email" v-model="email" @blur="$v.email.$touch()">
          <!-- Muestra este mensaje cuando el input esta vacio -->
          <p v-if="!$v.email.required">This field must not be empty.</p>
          <!-- Muestra este mensaje cuando el input no es un email valido -->
          <p v-if="!$v.email.email">Please provide a valid email address.</p>
        </div>
        <div class="input" :class="{invalid: $v.age.$error}">
          <label for="age">Your Age</label>
          <input type="number" id="age" v-model.number="age" @blur="$v.age.$touch()">
          <!-- Muestra un mesaje cuando no se cumpla la edad minima y tambien accede al valor minimo configurado a traves de la propiedad $params -->
          <p v-if="!$v.age.minimum">You have to be at least {{ $v.age.$params.minimum.min }} years old.</p>
        </div>
        <div class="input" :class="{invalid: $v.password.$error}">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" @blur="$v.password.$touch()">
        </div>
        <div class="input" :class="{invalid: $v.confirmPassword.$error}">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" @blur="$v.confirmPassword.$touch()">
        </div>
        <div class="input">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <div class="hobbies">
          <h3>Add some Hobbies</h3>
          <button @click="onAddHobby" type="button">Add Hobby</button>
          <div class="hobby-list">
            <!-- Aplica la clase "invalid" dependiendo si cada uno de los values en el array cumple las validaciones -->
            <div class="input" v-for="(hobbyInput, index) in hobbyInputs" :key="hobbyInput.id" :class="{invalid: $v.hobbyInputs.$each[index].value.$error}">
              <label :for="hobbyInput.id">Hobby #{{ index }}</label>
              <!-- Habilita las validaciones en cada uno de los hobbies -->
              <input type="text" :id="hobbyInput.id" v-model="hobbyInput.value" @blur="$v.hobbyInputs.$each[index].value.$touch()">
              <button @click="onDeleteHobby(hobbyInput.id)" type="button">X</button>
            </div>
            <p v-if="!$v.hobbyInputs.required">Please add hobbies</p>
            <p v-if="!$v.hobbyInputs.minimum">You have to specify at least {{ $v.hobbyInputs.$params.minimum.min }} hobbies </p>
          </div>
        </div>
        <!-- $model: se utiliza en casos en que sea obligatorio checkear un checkbox. $invalid: esto puede ser true incluso cuando el usuario no ha cambiado nada. $error: solo puede ser true cuando el usuario modifico el valor -->
        <div class="input inline" :class="{invalid: $v.terms.$invalid}">
          <input type="checkbox" id="terms" v-model="terms" @change="$v.terms.$touch()">
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit">
          <!-- Deshabilita el boton a menos que se cumplan todas las validaciones -->
          <button type="submit" :disabled="$v.$invalid">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  // Importar validadores comunes que vienen incorporados en la libreria
  import { required, email, numeric, minValue, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        email: '',
        age: null,
        password: '',
        confirmPassword: '',
        country: 'usa',
        hobbyInputs: [],
        terms: false
      }
    },
    // Validaciones habilitadas por "Vuelidate"
    validations: {
      // Propiedades utilizadas como v-model
      email: {
        // Validadores aplicados a la propiedad
        required,
        email,
        // Validacion personalizada. Siempre se recibe el valor actual como parametro y debe devolver true/false
        unique: value => {          
          if (value === '') return true

          // Hace una llamada por Axios para validar si existe alguien con ese email
          return axios.get('users.json?orderBy="email"&equalTo="' + value + '"')
            .then(response => {
              return Object.keys(response.data).length === 0
            })
        }
      },
      age: {
        required,
        numeric,
        minimum: minValue(18)
      },
      password: {
        required,
        minimum: minLength(6)
      },
      confirmPassword: {
        // Validar que un input contenga el mismo valor que otro. Esto se puede lograr con solo pasarle como string la propiedad con la que queremos comparar
        sameAs: sameAs('password')
        /* O pasandole una funcion que devuelve la propiedad de la instancia de Vue(vm) con la que queremos comparar
        sameAs: sameAs(vm => { 
          return vm.password 
        })
        */
      },
      hobbyInputs: {
        required,
        // Cantidad minima de elementos
        minimum: minLength(2),
        // Validaciones para cada item del array
        $each: {
          value: {
            required,
            minimum: minLength(5)
          }
        }
      },
      terms: {
        // Esta propiedad es obligatoria a menos que se cumpla otra funcion
        required: requiredUnless(vm => {
          return vm.country === 'germany';
        })
      }
    },
    methods: {
      onAddHobby () {
        const newHobby = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.hobbyInputs.push(newHobby)
      },
      onDeleteHobby (id) {
        this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id)
      },
      onSubmit () {
        const formData = {
          email: this.email,
          age: this.age,
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          hobbies: this.hobbyInputs.map(hobby => hobby.value),
          terms: this.terms
        }
        console.log(formData)
        this.$store.dispatch('signup', formData)
      }
    }
  }
</script>

<style scoped>
  .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .input.invalid label {
    color: red;
  }
  .input.invalid input {
    border: 1px solid red;
    background-color: #ffc9aa;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }  
</style>