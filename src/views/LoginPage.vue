<template>
  <!-- Logowanie -->
<div class="row">
  <div class="col">
    <main class="form-signin col-sm-3 m-auto">
      <form @click.prevent>
        <h1 class="h3 mb-3 fw-normal">Logowanie</h1>

        <div class="form-floating">
          <input type="login" v-model="login" class="form-control" id="floatingInput" required>
          <label for="floatingInput" required>Login</label>
          
        </div>
        <div class="form-floating">
          <input type="password" v-model="password" class="form-control" id="floatingPassword" required>
          <label for="floatingPassword" required>Hasło</label>
        </div>
        <button @click="checkPassword()" class="btn btn-primary">Zaloguj się Button</button>
      </form>
          login: aaa, hasło: aaa lub sss/sss

    </main>
  </div>
</div>
</template>

<script>
import router from "../router"    
import axios from "axios"   
import loginManager from '../mixins/LoginManager.js'


    export default {    
        name: "Login",
        mixins: [ loginManager ],
        data() {
          return {
            login: "",
            password: "",
            loggedIn: false,
  
          }
        },
        methods: {
          checkPassword: function () {
            if (this.checkUserPassword(this.login, this.password)) {
              this.logUser (this.login);
              this.$router.push('/products');

            } else {
              alert('Błąd logowania');
            }
          },
          computed: {
            userIsLogged() {
            }

          }
    }
    }
</script>


<style>

</style>