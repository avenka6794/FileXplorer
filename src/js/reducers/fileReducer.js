export default function reducer(state = { files: [], curPath: "" }, action) {
  switch (action.type) {
    case "FETCH_FILES": {
      return { ...state,  };
    }
    case "FETCH_FILES_FULFILLED": {
      return { ...state, files: action.payload };
    }
    case "CHANGE_CURPATH": {
      return { ...state, curPath: action.payload };
    }
    default:
      break;
  }
  return state;
}
