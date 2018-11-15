<template>
  <div class="users-show">

    <body class="home">
        <div class="page-mask">
            <div class="page-loader">
                <div class="spinner"></div>
                Loading...
            </div>
        </div>
        <div class="wrap">
            <!-- Main Section -->
            <section id="main">
                <div class="breadcrumb-wrapper">
                    <div class="pattern-overlay">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                    <h2 class="title">My Page</h2>
                                </div>
                                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                    <div class="breadcrumbs pull-right">
                                        <ul>
                                            <li>You are Now on:</li>
                                            <li><a href="/">About</a></li>
                                            <li>My Page</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Main Content -->
                <div class="content margin-top60 margin-bottom60">
                    <div class="container"> 
                        <div class="row">
                          <h1>Welcome {{ user.first_name }}</h1>
                          <button type="button" class="btn btn-color" data-toggle="modal" data-target="#registrationModal">
                              Create a Meal
                            </button>
                          <!-- Contact Box -->
                          <h2>Todays Meals</h2>
                          <div v-for="meal in lastThreeMeals" class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                              <div class="contact-box widget">
                                  <h3>{{meal.name}}</h3>
                                  <i class="fa fa-cutlery fa-2x"></i>
                              </div>
                          </div>
                        </div>
                        <div class="row">
                          <!-- Contact Box -->
                          <h2>Total Macronutrients</h2>
                          <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                              <div class="contact-box widget">
                                  <h3>Protein:</h3>
                                  <h3>{{totalProtein}} g</h3>
                              </div>
                          </div>
                          <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                              <div class="contact-box widget">
                                  <h3>Carbs:</h3>
                                  <h3>{{totalCarbohydrates}} g</h3>
                              </div>
                          </div>
                          <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                              <div class="contact-box widget">
                                  <h3>Fat:</h3>
                                  <h3>{{totalFat}} g</h3>
                              </div>
                          </div>
                        </div>
                        <div class="row">
                          <!-- Contact Box -->
                          <h2>Total Micronutrients</h2>
                          <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                              <div class="contact-box widget">
                                  <h3>Magnesium:</h3>
                                  <h3>{{totalMagnesium}} mg</h3>
                              </div>
                          </div>
                          <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                              <div class="contact-box widget">
                                  <h3>Iron:</h3>
                                  <h3>{{totalIron}} mg</h3>
                              </div>
                          </div>
                          <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                              <div class="contact-box widget">
                                  <h3>Zinc:</h3>
                                  <h3>{{totalZinc}} mg</h3>
                              </div>
                          </div>
                          <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                              <div class="contact-box widget">
                                  <h3>Folate:</h3>
                                  <h3>{{totalFolate}} mcg</h3>
                              </div>
                          </div>
                          <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                              <div class="contact-box widget">
                                  <h3>Vitamin D:</h3>
                                  <h3>{{totalVitaminD}} iu</h3>
                              </div>
                          </div>
                        </div>
                        <!-- /Contact Box -->
                    </div>
                </div>
                <!-- Main Content -->
            </section>
            <!-- /Main Section -->

            <!-- Modal -->
            <section id="modals">
                <!-- Registration Modal -->
                <div class="modal register fade" id="registrationModal" tabindex="-1" role="dialog" aria-labelledby="registrationModal" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-body">
                        <div class="meals-new">
                          <form v-on:submit.prevent="submit()">
                            <h1>Create Meal</h1>
                            <ul>
                              <li class="text-danger" v-for="error in errors">{{ error }}</li>
                            </ul>
                            <div class="form-group">
                              <label>Meal Name:</label> 
                              <input type="text" class="form-control" v-model="mealName" placeholder="Meal Name">
                            </div>
                            <div class="form-group">
                              <label>Ingredients:</label> 
                              <div>
                                  <vue-tags-input
                                    v-model="tag"
                                    :tags="tags"
                                    :autocomplete-items="filteredItems"
                                    @tags-changed="newTags => tags = newTags" placeholder="Search Ingredients">
                                  </vue-tags-input>
                                </div>
                            </div><br>
                            <div class="form-group">
                              <!-- user types directions for creating meal -->
                              <textarea rows="10" cols="50" placeholder="Add Instructions for your meal" class="form-control" v-model="instructions">
                              </textarea>
                            </div>
                            <input type="submit" class="btn btn-color" value="Add Meal">
                          </form>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button v-on:click="emptyModal()" type="button" class="btn btn-color" data-dismiss="modal">Save</button>
                        <button v-on:click="emptyModal()" type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Registration Modal -->
            </section>
            <!-- /Modal -->
            <!-- Scroll To Top --> 
            <a href="#" class="scrollup"><i class="fa fa-angle-up"></i></a>
        </div>
        <!-- /Wrap -->
    </body>










   <!-- current user info-->
    <!-- <h1>Welcome {{ user.first_name }}</h1> -->
    <!-- end current user info -->

    <!-- daily meals template -->
    <!-- add modal for new meal -->
    <!-- <div class="container">
      <div class="row">
        <div class="border border-dark col">
          <div v-for="meal in lastThreeMeals">
            <h3>{{meal.name}}</h3>
          </div>
          <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
              Create a Meal
            </button>
        </div> -->
        <!-- protein for last three meals -->
        <!-- <h5>protein: {{totalProtein}}</h5>
        <h5>carbohydrates: {{totalCarbohydrates}}</h5>
        <h5>Fats: {{totalFat}}</h5>
        <h5>Magnesium: {{totalMagnesium}}</h5>
        <h5>Iron: {{totalIron}}</h5>
        <h5>Zinc: {{totalZinc}}</h5>
        <h5>Folate: {{totalFolate}}</h5>
        <h5>Vitamin D: {{totalVitaminD}}</h5>
        
      </div>
    </div> -->
    <!-- end daily meals template -->


    <!-- Modal -->
   <!--  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="registrationModal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Meal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="meals-new">
              <form v-on:submit.prevent="submit()">
                <h1>Create Meal</h1>
                <ul>
                  <li class="text-danger" v-for="error in errors">{{ error }}</li>
                </ul>
                <div class="form-group">
                  <label>Meal Name:</label> 
                  <input type="text" class="form-control" v-model="mealName">
                </div>
                <div class="form-group">
                  <label>Ingredients:</label> 
                  <div>
                      <vue-tags-input
                        v-model="tag"
                        :tags="tags"
                        :autocomplete-items="filteredItems"
                        @tags-changed="newTags => tags = newTags" placeholder="Search Ingredients">
                      </vue-tags-input>
                    </div>
                </div><br>
                <div class="form-group"> -->
                  <!-- user types directions for creating meal  -->
              <!--     <textarea rows="10" cols="50" placeholder="Add Instructions for your meal" class="form-control" v-model="instructions">
                  </textarea>
                </div>
                <input type="submit" class="btn btn-primary" value="Add Meal">
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div> -->
    </div> 
    <!-- end modal -->
  </div>
</template>

<style>
</style>

<script>
  import axios from 'axios';
  import VueTagsInput from '@johmun/vue-tags-input';

  export default {
    components: {
      VueTagsInput,
    },

    data: function() {
      return {
        user: {},
        meals: [],
        newMeal: "",
        lastThreeMeals: [],
        // data for new meal
        mealName: "",
        instructions: "",
        errors: [],
        tag: '',
        tags: [],
        autocompleteItems: [],
        totalProtein: 0,
        totalCarbohydrates: 0,
        totalFat: 0,
        totalMagnesium: 0,
        totalZinc: 0,
        totalIron: 0,
        totalFolate: 0,
        totalVitaminD: 0
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/users/me").then(response => {
        console.log(response.data);
        this.user = response.data;
        // this.lastThreeMeals = this.user.meals.slice(this.user.meals.length - 3, this.user.meals.length);
        this.lastThreeMeals = [
          {id: 1, name: "chicken", recipe_instructions: "cook", user_id: 3, nutrients: {
            carbohydrates: 13,
            fat: 3,
            folate: 12,
            iron: 10,
            magnesium: 1,
            protein: 25,
            vitamin_d: 1,
            zinc: 1
          }},
          {id: 2, name: "turkey", recipe_instructions: "cook", user_id: 3, nutrients: {
            carbohydrates: 10,
            fat: 1,
            folate: 5,
            iron: 6,
            magnesium: 1,
            protein: 25,
            vitamin_d: 2,
            zinc: 4
          }},
          {id: 3, name: "apple", recipe_instructions: "cook", user_id: 3, nutrients: {
            carbohydrates: 35,
            fat: 1,
            folate: 3,
            iron: 22,
            magnesium: 3,
            protein: 4,
            vitamin_d: 2,
            zinc: 4
          }}
        ];
        this.totalNutrients();
      });

      // axios request for ingredients data
      axios.get("http://localhost:3000/api/ingredients").then( response => {
        this.autocompleteItems = response.data.map(a => {
          return { text: a.name, id: a.id };
        });
      })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },

    methods: {
      submit: function() {
        var params = {
          name: this.mealName,
          ingredients: this.tags.map(a => a.text),
          recipe_instructions: this.instructions,
        };
        axios
          .post("http://localhost:3000/api/meals", params)
          .then(response => {
            this.lastThreeMeals.shift();
            this.lastThreeMeals.push(response.data);
            this.totalNutrients();
            this.mealName = "";
            this.tag = "";
            this.instructions = "";
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      },

      totalNutrients: function() {
        console.log("in total nutrients");
        this.lastThreeMeals.forEach(function(meal) {
          this.totalProtein += meal.nutrients["protein"];
          this.totalCarbohydrates += meal.nutrients["carbohydrates"];
          this.totalFat += meal.nutrients["fat"];
          this.totalMagnesium += meal.nutrients["magnesium"];
          this.totalZinc += meal.nutrients["zinc"];
          this.totalIron += meal.nutrients["iron"];
          this.totalFolate += meal.nutrients["folate"];
          this.totalVitaminD += meal.nutrients["vitamin_d"];
        }.bind(this));
      },

      emptyModal: function() {
        this.mealName = "";
        this.tag = "";
        this.instructions = "";
      },

    },

    computed: {
      filteredItems() {
        return this.autocompleteItems.filter(i => new RegExp(this.tag, 'i').test(i.text));
      },

  
    }
  };
</script>