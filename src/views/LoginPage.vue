<template>
  <!-- Logowanie -->
<div class="row">
  <div class="col">
    <main class="form-signin col-sm-3 m-auto">
      <form @click.prevent>
        <h1 class="h3 mb-3 fw-normal">Logowanie</h1>

        <div class="form-floating">
          <input type="email" v-model="email" class="form-control" id="floatingInput" required>
          <label for="floatingInput" required>Email</label>
          
        </div>
        <div class="form-floating">
          <input type="password" v-model="password" class="form-control" id="floatingPassword" required>
          <label for="floatingPassword" required>Hasło</label>
        </div>
        <button @click="checkPassword()" class="btn btn-primary">Zaloguj się Button</button>
      </form>
          email: a@a, hasło: aaa

    </main>
  </div>
</div>
</template>

<script>

import router from "../router"    
import axios from "axios"    

    export default {    
        name: "Login",
        data() {
          return {
            email: "",
            password: "",
            loggedIn: false,
  
          }
        },
        methods: {
          checkPassword: function () {
            if (this.password === 'aaa' && this.email === 'a@a'){
              this.loggedIn = true;
              console.log('loggedIn');
              
            } if (this.loggedIn) {
              this.$router.push('/products');
            } else {
              alert('Błąd logowania');
            }
          }
    }
    }
</script>


<style>

</style>