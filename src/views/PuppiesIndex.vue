<template>
  <div class="PuppiesIndex">
    <h1>{{ message }}</h1>
    <div v-for = "puppy in puppies">
        <li>ID: {{ puppy.id }}</li>
        <li>Name: {{ puppy.name }}</li>
      <hr />
      </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Showing you the Puppy Index!",
      puppies: [],
    };
  },
  created: function () {
    this.getPuppies();
  },
  methods: {
    getPuppies: function () {
      console.log("Puppies Index...");
      axios.get(`http://localhost:3000/puppies`).then((response) => {
        console.log(response.data);
        this.puppies = response.data;
      });
    },
  },
};
</script>
