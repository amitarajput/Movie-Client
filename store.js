import { createStore } from "vuex"; // Import createStore function from Vuex

const store = createStore({
  // Create Vuex store using createStore function
  state: {
    movies: [
      {
        id: 1,
        title: "Movie 1",
        preview: "Preview for Movie 1",
        selected: false,
      },
      {
        id: 2,
        title: "Movie 2",
        preview: "Preview for Movie 2",
        selected: false,
      },
      {
        id: 3,
        title: "Movie 3",
        preview: "Preview for Movie 3",
        selected: false,
      },
      // Add more movies as needed
    ],
    selectedMovieId: null,
  },
  mutations: {
    selectMovie(state, movieId) {
      state.selectedMovieId = movieId;
    },
  },
});

export default store; // Export the created store
