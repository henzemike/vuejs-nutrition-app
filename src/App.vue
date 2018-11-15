<template>
  <div id="app">
    <header id="header">
        <!-- /Header Top Bar -->
        <!-- Main Header -->
        <div class="main-header">
            <div class="container">
                <!-- Logo -->
                <div class="logo pull-left">
                    <h1>
                        <a href="index.html">
                          <!-- create your logo -->
                        <img class="logo-color" src="img/logos/newtrition.png" alt="gallaxy" width="160" height="60">
                        </a>
                    </h1>
                </div>
                <!-- /Logo -->
                <!-- Mobile Menu -->
                <div class="mobile navbar-header">
                    <a class="navbar-toggle" data-toggle="collapse" href=".navbar-collapse">
                    <i class="fa fa-bars fa-2x"></i>
                    </a> 
                </div>
                <!-- /Mobile Menu -->
                <!-- Menu Start -->
                <nav class="collapse navbar-collapse menu">
                    <ul class="nav navbar-nav sf-menu">
                        <li>
                            <a id="current">
                            <router-link to="/">About</router-link>
                            </a>
                        </li>
                        <li v-if="isLoggedIn()">
                            <a class="sf-with-ul">
                              <router-link to="/users/me">My Page</router-link>
                            </a>
                        </li>
                        <li v-else>
                            <a class="sf-with-ul">
                              <router-link to="/login">Login</router-link>
                            </a>
                        </li>
                        <li v-if="isLoggedIn()">
                            <a  class="sf-with-ul">
                              <router-link to="/users/me/edit">Update Profile</router-link>
                            </a>
                        </li>
                        <li v-else>
                            <a class="sf-with-ul">
                              <router-link to="/signup">Signup</router-link>
                            </a>  
                        </li>
                        <li v-if="isLoggedIn()">
                            <a class="sf-with-ul">
                              <router-link to="/meals">My Meals</router-link>
                            </a>
                        </li>
                        <li v-if="isLoggedIn()">
                            <a>
                              <router-link to="/logout">Logout</router-link>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- /Menu --> 
            </div>
        </div>
        <!-- /Main Header -->
    </header>

    <!-- <div class="container"> -->
      <router-view/>
    <!-- </div> -->
    

    <!-- Footer Start -->
    <div class="wrap">
      <footer id="footer">
          <div class="pattern-overlay">
              <!-- Footer Top Start -->
              <div class="footer-top">
                  <div class="container">
                      <div class="row">
                          <section class="col-lg-3 col-md-3 col-xs-12 col-sm-3 footer-one">
                              <h3 class="light">About</h3>
                              <p> 
                                  An Application that will help you keep track of your daily meals along with macronutrients and select micronutrients needed for optimal daily health! 
                              </p>
                          </section>
                          <section class="col-lg-3 col-md-3 col-xs-12 col-sm-3 footer-two">
                              
                          </section>
                          <section class="col-lg-3 col-md-3 col-xs-12 col-sm-3 footer-three">
                              
                          </section>
                          <section class="col-lg-3 col-md-3 col-xs-12 col-sm-3 footer-four">
                              <h3 class="light">Subscribe</h3>
                              <p>
                                  Subscribe to our email newsletter to receive our news, updates and awesome free files.
                              </p>
                              <form method="get" action="#">
                                  <div class="input-group">
                                      <input type="text" value="mail@example.com" onfocus="if(this.value=='mail@example.com')this.value='';" onblur="if(this.value=='')this.value='mail@example.com';" class="subscribe form-control">
                                      <span class="input-group-btn">
                                      <button class="btn subscribe-btn" type="button">Join</button>
                                      </span>
                                  </div>
                                  <!-- /input-group -->
                              </form>
                          </section>
                      </div>
                  </div>
              </div>
              <!-- Footer Top End --> 
              <!-- Footer Bottom Start -->
              <div class="footer-bottom">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6 ">
                              <p class="credits"> NEW-TRITION</p>
                          </div>
                          <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6 ">
                              <ul class="social social-icons-footer-bottom">
                                  <li class="facebook"><a href="#" data-toggle="tooltip" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                  <li class="twitter"><a href="#" data-toggle="tooltip" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                                  <li class="dribbble"><a href="#" data-toggle="tooltip" title="Dribble"><i class="fa fa-dribbble"></i></a></li>
                                  <li class="linkedin"><a href="#" data-toggle="tooltip" title="LinkedIn"><i class="fa fa-linkedin"></i></a></li>
                                  <li class="rss"><a href="#" data-toggle="tooltip" title="Rss"><i class="fa fa-rss"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- Footer Bottom End --> 
              <!-- /Footer Bottom --> 
          </div>
      </footer>
    </div>
  </div>
</template>

<style>
</style>


<script>


  export default {

    data: function() {
      return {
        
      };
    },

    created: function() {},

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