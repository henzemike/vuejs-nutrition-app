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
</template>

<script>
import axios from "axios";
import VueTagsInput from '@johmun/vue-tags-input';

export default {
  components: {
    VueTagsInput,
  },
  data: function() {
    return {
      mealName: "",
      instructions: "",
      errors: [],
      tag: '',
      tags: [],
      autocompleteItems: []
    };
  },
  created: function() {
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
        // map method causing name to be array in string
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
    }

  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => new RegExp(this.tag, 'i').test(i.text));
    },
  },
};
</script>