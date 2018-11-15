<template>
  <div class="login">

    <body class="home">
        <div class="page-mask">
            <div class="page-loader">
                <div class="spinner"></div>
                Loading...
            </div>
        </div>
        <!-- Wrap -->
        <div class="wrap">  
            <!-- Main Section -->
            <section id="main">
                <!-- Title, Breadcrumb -->
                <div class="breadcrumb-wrapper">
                    <div class="pattern-overlay">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                    <h2 class="title">Login</h2>
                                </div>
                                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                    <div class="breadcrumbs pull-right">
                                        <ul>
                                            <li>You are here:</li>
                                            <li><a href="/">Home</a></li>
                                            <li>Login</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Title, Breadcrumb -->
                <!-- Main Content -->
                <div class="content margin-top60 margin-bottom60">
                    <div class="container">
                        <div class="row">
                            <!-- Login -->
                            <div class="featured-boxes-login justify-content-md-center">
                                <!-- Login -->
                                <div  class="col-md-6">
                                  <form v-on:submit.prevent="submit()">
                                    <ul>
                                      <li class="text-danger" v-for="error in errors">{{ error }}</li>
                                    </ul>
                                    <div class="featured-box featured-box-secondary default info-content">
                                        <h2 class="form-signin-heading">Login</h2>
                                        <div class="box-content ">
                                          <div class="row">
                                              <div class="form-group">
                                                  <div class="col-md-10">
                                                      <input type="email" class="form-control" v-model="email" placeholder="Email">
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row">
                                              <div class="form-group">
                                                  <div class="col-md-10">
                                                      <input type="password" class="form-control" v-model="password" placeholder="Password">
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row">
                                              <div class="col-md-9">
                                              </div>
                                              <div class="col-md-3"> 
                                                  <input type="submit" value="Login" class="btn btn-color push-bottom" data-loading-text="Loading...">
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                  </form>
                                </div>
                                <!-- /Login -->
                               
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Main Content -->
            </section>
            <!-- /Main Section -->
            <!-- Scroll To Top --> 
            <a href="#" class="scrollup"><i class="fa fa-angle-up"></i></a>
        </div>
        <!-- /Wrap -->
    </body>

















  <!--   <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div> -->

  </div>
</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/users/me");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>