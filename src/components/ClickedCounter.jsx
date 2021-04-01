import React, { Component } from "react";
import withCounter from "../components-two/withCounter";

class ClickedCounter extends Component {
  render() {
    const { count, countIncrement } = this.props;
    return (
      <div>
        <button onClick={countIncrement}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    );
  }
}
export default withCounter(ClickedCounter, 10);
