<template>
  <div class="users-show">

   <!-- current user info-->
    <h1>{{ profile }}</h1>
    <h2>{{user.user_name}}</h2>
    <!-- end current user info -->

    <!-- daily meals template -->
    <!-- add modal for new meal -->
    <div class="container">
      <div class="row">
        <div class="border border-dark col">
          <!-- modal button will be breakfast -->
          <h4>Breakfast</h4>
          <!-- after meal is created it will populate the meal name -->
            <p>{{tags.text}}</p>
            <!-- Button trigger modal -->
            <button  type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
              Add Meal
            </button>
          <h4>Snack</h4>
            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
              Add Meal
            </button>    
          <h4>Lunch</h4>
            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
              Add Meal
            </button>        
          <h4>Snack</h4>
            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
              Add Meal
            </button>    
          <h4>Dinner</h4>
            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
              Add Meal
            </button>
        </div>
        <!-- nutrient % -->
        <div class="border border-dark col">
         <h4>Macronutrients</h4>
         <p>Protein: </p>
         <p>Carbohydrates: </p>
         <p>Fats: </p>

         <h4>Micronutrients</h4>

         <h5>Total Daily Nutrients: </h5>
        </div>
        <!-- end nutrient % -->
      </div>
    </div>
    <!-- end daily meals template -->


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  <label>Search Ingredient:</label> 
                  <div>
                      <vue-tags-input
                        v-model="tag"
                        :tags="tags"
                        :autocomplete-items="filteredItems"
                        @tags-changed="newTags => tags = newTags">
                      </vue-tags-input>
                      <p>{{tags}}</p>
                    </div>
                  <!-- <input type="text" class="form-control" v-model="ingredients"> -->
                </div><br>
                <div class="form-group">
                  <!-- user types directions for creating meal -->
                  <textarea rows="10" cols="50" placeholder="Add Instructions for your meal" class="form-control" v-model="instructions">
                  </textarea>
                </div>
                <input type="submit" class="btn btn-primary" value="Add Meal">
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Add Meal</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
    

    <!-- current user meals -->
    <div v-for="meal in meals">
      <p>{{meal.name}}</p>
      <p>{{meal.recipe_instructions}}</p>
    </div>
    <!-- end current user meals -->

    <!-- meals search -->
    <input type="text" placeholder="search meals">
    <!-- end meals search -->
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
        profile: "User profile page",
        user: {},
        meals: [],
        // data for new meal
        mealName: "",
        instructions: "",
        errors: [],
        tag: '',
        tags: [],
        autocompleteItems: []
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/users/" + this.$route.params.id).then(response => {
        this.user = response.data;
      });

      axios.get("http://localhost:3000/api/meals/").then(response => {
        this.meals = response.data;
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
          ingredients: this.tags.map(a => [a.text]),
          recipe_instructions: this.instructions,
        };
        axios
          .post("http://localhost:3000/api/meals", params)
          .then(response => {
            this.$router.push("/users/me");
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      },

      displayMealName: function() {
       return this.tags.text;
      }
    },
    computed: {
      filteredItems() {
        return this.autocompleteItems.filter(i => new RegExp(this.tag, 'i').test(i.text));
      },
    }
  };
</script>