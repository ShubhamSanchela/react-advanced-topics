import React, { Component } from "react";
import withCounter from "../components-two/withCounter";

class HoverCounter extends Component {
  render() {
    const { count, countIncrement } = this.props;
    return (
      <div>
        <h1 onMouseOver={countIncrement}>
          {this.props.name} Hovered {count} Times
        </h1>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 5);
