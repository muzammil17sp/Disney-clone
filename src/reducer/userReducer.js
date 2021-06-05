export const userReducer = (
  state = { name: "", imageUrl: "", email: "" },
  action
) => {
  switch (action.type) {
    case "SIGNIN":
      localStorage.setItem("user", JSON.stringify({ ...action?.payload }));
      return {
        name: action.payload.name,
        imageUrl: action.payload.imageUrl,
        email: action.payload.email,
      };
    case "SIGNOUT":
      localStorage.clear();
      return {
        imageUrl: "",
        name: "",
        email: "",
      };

    default:
      return state;
  }
};
