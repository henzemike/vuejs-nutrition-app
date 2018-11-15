<template>
  <div class="signup">
    
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
                                    <h2 class="title">Signup</h2>
                                </div>
                                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                    <div class="breadcrumbs pull-right">
                                        <ul>
                                            <li>You are here:</li>
                                            <li><a href="/">Home</a></li>
                                            <li>Signup</li>
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
                            <div class="featured-boxes login">
                                <!-- Login -->
                                <div id="center" class="col-md-10">
                                  <form v-on:submit.prevent="submit()">
                                    <ul>
                                      <li class="text-danger" v-for="error in errors">{{ error }}</li>
                                    </ul>
                                    <div class="featured-box featured-box-secundary default info-content">
                                        <h2 class="form-signin-heading">Signup</h2>
                                        <div class="box-content ">
                                          <div class="row">
                                              <div class="form-group">
                                                  <div class="col-md-6">
                                                      <input type="text" class="form-control" v-model="firstName" placeholder="First Name">
                                                  </div>
                                                  <div class="col-md-6">
                                                      <input type="text" class="form-control" v-model="lastName" placeholder="Last Name">
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row">
                                              <div class="form-group">
                                                  <div class="col-md-6">
                                                      <input type="text" class="form-control" v-model="userName" placeholder="Username">
                                                  </div>
                                                  <div class="col-md-6">
                                                      <input type="email" class="form-control" v-model="email" placeholder="Email">
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row">
                                              <div class="form-group">
                                                  <div class="col-md-6">
                                                      <input type="password" class="form-control" v-model="password" placeholder="Password">
                                                  </div>
                                                  <div class="col-md-6">
                                                      <input type="password" class="form-control" v-model="passwordConfirmation" placeholder="Password confirmation">
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row">
                                              <div class="col-md-9">
                                              </div>
                                              <div class="col-md-3"> 
                                                  <input type="submit" value="Signup" class="btn btn-color push-bottom" data-loading-text="Loading...">
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













<!--     <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="firstName">
        </div>
        <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="lastName">
        </div>
        <div class="form-group">
          <label>User Name:</label> 
          <input type="text" class="form-control" v-model="userName">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        user_name: this.userName,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>