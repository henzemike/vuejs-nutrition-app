<template>
  <div class="users-show">

   <!-- current user info-->
    <h1>{{ profile }}</h1>
    <h2>{{user.user_name}}</h2>
    <!-- end current user info -->

    <!-- daily meals template -->
    <div class="meal-log">
      <ul>
        <li>Breakfast
          <ul>
            <li>{{meals[0]["name"]}}</li>
          </ul>
        </li>
        <li>Snack
          <ul>
            <li>{{meals[1]["name"]}}</li>
          </ul>
        </li>
        <li>Lunch
          <ul>
            <li>{{meals[2]["name"]}}</li>
          </ul>
        </li>
        <li>Snack
          <ul>
            <li>{{meals[3]["name"]}}</li>
          </ul>
        </li>
        <li>Dinner
          <ul>
            <li>{{meals[4]["name"]}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- end daily meals template -->

    <!-- nutrient % -->
      <div class="nutrients">
       <h3>Macronutrients</h3>
       <p>Protein: </p>
       <p>Carbohydrates: </p>
       <p>Fats: </p>


       <h3>Micronutrients</h3>

       <h3>Total Daily Nutrients: </h3>
      </div>
    <!-- end nutrient % -->

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
  .meal-log {
    width: 300px;
    border: 5px solid green;
    padding: 25px;
    margin: 25px;
    text-align: left;
  }

  .nutrients {
    width: 300px;
    border: 5px solid green;
    padding: 25px;
    margin: 25px;
    text-align: left;
  }
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
        console.log(response.data);
        this.meals = response.data;
      });
    },
    methods: {},
    computed: {}
  };
</script>