import React from "react";
import { connect } from "react-redux";
import { getUserData } from "../actions/userActions";
import { getFiles, changeCurPath } from "../actions/fileActions";
import Sub from "./components/Sub";
import Navbar from "./components/Navbar";

function mapStateToProps(state) {
  return {
    user: state.user,
    files: state.file
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getDir: path => dispatch(getFiles(path)),
    changeDir: name => dispatch(changeCurPath(name))
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.getDir("");
  }

  changePath(name, direction) {
    let path;
    return new Promise((resolve, reject) => {
      if (direction === "down") {
        path = this.props.files.curPath + "/" + name;
      } else {
        let index = name.lastIndexOf("/");
        path = name.substring(0, index);
      }
      this.props.changeDir(path);
      resolve(path);
    });
  }

  moveUp() {
    let modified = this.props.files.curPath;
    this.changePath(modified, "up").then(path => {
      this.props.getDir(path);
    });
  }

  moveDown(name) {
    this.changePath(name, "down").then(path => {
      this.props.getDir(path);
    });
  }

  render() {
    const { files } = this.props;

    const mappedFiles = files.files.map(file => (
      <Sub
        cls={file[".tag"]}
        key={file.id}
        name={file.name}
        onClick={this.moveDown.bind(this)}
      />
    ));

    //Highest Level Component
    return (
      <div>
        <Navbar />
        {mappedFiles}
      </div>
    );
  }
}
