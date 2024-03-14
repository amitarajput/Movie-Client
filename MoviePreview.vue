<!-- MoviePreview.vue -->
<template>
  <div v-if="selectedMovie" class="movie-preview">
    <h2>{{ selectedMovie.title }}</h2>
    <p>{{ selectedMovie.preview }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    selectedMovie() {
      return this.$store.state.movies.find(
        (movie) => movie.id === this.$store.state.selectedMovieId
      );
    },
  },
};
</script>

<style scoped>
.movie-preview {
  background-color: lightgray;
  padding: 20px;
  border-radius: 5px;
}
</style>
