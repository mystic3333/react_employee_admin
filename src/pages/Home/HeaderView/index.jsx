import React, { Fragment } from "react";

// css
import "./style.less";

export default class HeaderView extends React.Component {
  render() {
    return (
      <div className="header_container">
        <div className="logo">logo</div>
        <div className="header_content">
            header
        </div>
      </div>
    );
  }
}
