const reducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        movies: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
