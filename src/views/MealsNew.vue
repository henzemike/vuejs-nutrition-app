<template>
  <div class="meals-new">
    <div class="container">
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
          <input type="text" class="form-control" v-model="ingredients">
          <input type="submit" class="btn btn-primary" value="Add Ingredient">
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
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      mealName: "",
      instructions: "",
      ingredients: [],
      errors: []
    };
  },
  methods: {
    submit: function() {
      var mealParams = {
        name: this.mealName,
        ingredients: this.ingredients,
        recipe_instructions: this.instructions
      };
      axios
        .post("http://localhost:3000/api/meals", mealParams)
        .then(response => {
          this.$router.push("/users/me");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }

  }
};
</script>