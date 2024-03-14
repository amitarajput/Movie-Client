<!-- App.vue -->
<template>
  <div id="app">
    <h1>Movie Catalogue</h1>
    <MoviePreview />
    <MovieList />
  </div>
</template>

<script>
import MoviePreview from "./components/MoviePreview.vue";
import MovieList from "./components/MovieList.vue";

export default {
  components: {
    MoviePreview,
    MovieList,
  },
};
</script>

<style>
/* Add your styles here */
</style>
