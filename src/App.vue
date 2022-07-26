<template>
<NavBar />

<!-- Logowanie -->
<main class="form-signin w-100 m-auto" v-if="logIn" >
  <form @submit.prevent="updateLogin()">
    <h1 class="h3 mb-3 fw-normal">Logowanie</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" required>
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" required>
      <label for="floatingPassword">Hasło</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary">Zaloguj się</button>
  </form>
</main>


  <router-view v-else/>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Spinner from "./components/Spinner.vue";

  export default {
    name: "App",
    logIn: false,
    components: { NavBar, Spinner },
    data() {
      return {
        logIn: true
      }
    },

    methods: {
      updateLogin() {
        this.logIn = false
      }
    }
    }

</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
