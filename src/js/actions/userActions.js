export function getUserData() {
  //call apis to get data
  console.log("testing");
  return function(dispatch) {
    dispatch({
      type: "FETCH_USER"
    });
    setTimeout(function() {
      dispatch({
        type: "FETCH_USER_FULFILLED",
        payload: {
          name: "USER"
        }
      });
    }, 3000);
  };
}
