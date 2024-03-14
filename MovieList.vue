<!-- MovieList.vue -->
<template>
  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" @click="selectMovie(movie)">
      <h3 :class="{ selected: movie.selected }">{{ movie.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  methods: {
    selectMovie(movie) {
      this.$store.commit("selectMovie", movie.id);
      this.deselectAllMovies();
      movie.selected = true;
    },
    deselectAllMovies() {
      this.movies.forEach((movie) => {
        movie.selected = false;
      });
    },
  },
};
</script>

<style scoped>
.selected {
  color: gray;
}
</style>
