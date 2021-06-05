export const userLogin = (user) => (dispatch) => {
  
  const {name, email, imageUrl} = user  

  localStorage.setItem("user", JSON.stringify({name, email, imageUrl}))
  dispatch({
    type: "SIGNIN",
    payload: { name, email, imageUrl },
  });
};
export const signoutUser = () => (dispatch) => {
  localStorage.removeItem("user")
  dispatch({
    type: "SIGNOUT",
  });
};
