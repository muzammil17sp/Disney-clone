export const setMovies = (movie) => (dispatch) => {
  dispatch({
    type: "SET_MOVIES",
    payload: movie,
  });
};
