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
            <p>{{meals[0]["name"]}}</p>
          <h4>Snack</h4>
            <p>{{meals[1]["name"]}}</p>      
          <h4>Lunch</h4>
            <p>{{meals[2]["name"]}}</p>         
          <h4>Snack</h4>
            <p>{{meals[3]["name"]}}</p>     
          <h4>Dinner</h4>
            <p>{{meals[4]["name"]}}</p> 
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

    

    <!-- current user meals -->
    <!-- <div v-for="meal in meals">
      <p>{{meal.name}}</p>
      <p>{{meal.recipe_instructions}}</p>
    </div> -->
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
  export default {
    data: function() {
      return {
        profile: "User profile page",
        user: {},
        meals: []
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/users/" + this.$route.params.id).then(response => {
        this.user = response.data;
      });

      axios.get("http://localhost:3000/api/meals/").then(response => {
        this.meals = response.data;
      });
    },
    methods: {},
    computed: {}
  };
</script>