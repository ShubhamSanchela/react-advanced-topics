import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      sample : this.props.sample
    };
  }

  // Set state method contains two arguments
  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Call back value defined", this.state.count);
      }
    );
    console.log(this.state.count);
  }

  // Passing two arguments to setState
 twoArguments = () => {
  this.setState((state, props) => {
    console.log(state)
    console.log(props);
  })
 }

  render() {
    return (
      <div>
        Counter : {this.state.count} <br />
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={this.twoArguments}>Checking</button>
      </div>
    );
  }
}
