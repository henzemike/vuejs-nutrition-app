<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <a v-if="isLoggedIn()"><router-link to="/users/me">{{user.user_name}}</router-link> |</a>
      <a v-if="isLoggedIn()"><router-link to="/logout">Logout</router-link> |</a>
      <a v-else><router-link to="/login">Login</router-link> |</a>
      <a v-if="isLoggedIn()"><router-link to="/meals">New Meal</router-link> |</a> 
      <a v-else><router-link to="/signup">Signup</router-link> |</a>
      
      

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
  import axios from "axios";

  export default {

    data: function() {
      return {
        user: {}
      };
    },

    created: function() {
      axios.get("http://localhost:3000/api/users/" + this.$route.params.id).then(response => {
        this.user = response.data;
      });
    },

    methods: {
      isLoggedIn: function() {
        if (localStorage.getItem("jwt")) {
          return true;
        }
        return false;
      },
    },
    
  };
</script>