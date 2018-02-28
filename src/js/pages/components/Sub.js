import React from "react";
import { getFiles } from "../../actions/fileActions";

export default class Layout extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <li className={this.props.cls} onClick={() => this.props.onClick(name)}>
        {name}
      </li>
    );
  }
}
