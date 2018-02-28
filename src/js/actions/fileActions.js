import { Dropbox } from "dropbox";
var dbx = new Dropbox({
  accessToken:
    "HQA9Onq-CeAAAAAAAAAAiVemFLsexVkN7rI3vbdpFxq2mDubxNWmDrBHm5BzSYcz"
});

export function getFiles(path) {
  return function(dispatch) {
    dispatch({ type: "FETCH_FILES" });

    dbx
      .filesListFolder({ path })
      .then(function(response) {
        dispatch({ type: "FETCH_FILES_FULFILLED", payload: response.entries });
      })
      .catch(function(err) {
        dispatch({ type: "FETCH_FILES_REJECTED" });
        console.log(err);
      });
  };
}
export function changeCurPath(path) {
  return function(dispatch) {
    setTimeout(function() {
      dispatch({ type: "CHANGE_CURPATH", payload: path });
    }, 200);
  };
}
export function getMeta(filename) {}
