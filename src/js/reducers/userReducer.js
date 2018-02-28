export default function reducer(
  state = {
    user: {},
    fetching: false,
    fetched: false
  },
  action
) {
  switch (action.type) {
    case "FETCH_USER": {
      console.log("Fetching Initiated");
      return { ...state, fetching: true };
    }
    case "FETCH_USER_FULFILLED": {
      return { ...state, fetching: false, fetched: true, user: action.payload };
    }
    default: {
      break;
    }
  }
  return state;
}
