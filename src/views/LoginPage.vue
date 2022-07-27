<template>
  <!-- Logowanie -->
<div class="row ">
  <div class="col">
    <main class="form-signin col-sm-4 m-auto">
      <form @submit.prevent="login()">
        <h1 class="h3 mb-3 fw-normal">Logowanie</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput">
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword">
          <label for="floatingPassword">Hasło</label>
        </div>
        <button type="sumbit">Zaloguj się Button</button>
        <router-link to="/products" class="btn btn-primary">Zaloguj się</router-link>
      </form>
    </main>

          <div class="row mt-3">
            <div class="col">
              <router-link to="/products" class="btn btn-primary"><i class="fa fa-arrow-alt-circle-left"></i> Powrót</router-link>
            </div>
          </div>
  </div>
</div>
</template>

<script>
// import authAxios from '../auth-axios';

import router from "../router"    
import axios from "axios"    

    export default {    
        name: "Login",
        data() {
          return {
            // this.$cookies.config('7d');
            email: "",
            password: ""
          }
        },
        methods: {    
            login: (e) => {    
                this.$cookies.set("email");
                e.preventDefault()    
                let email = "test@test"   
                let password = "pass"    
                let login = () => {    
                    let data = {    
                        email: email,    
                        password: password    
                    }    
                    axios.post("/srv/login", data)    
                        .then((response) => {
                            router.push("/products")    
                        })    
                        .catch((error) => {    
                            console.log(error, "Logowanie nie powiodło się")    
                        })    
                }    
                login()    
            }    
        }    
    }
</script>

<style>

</style>