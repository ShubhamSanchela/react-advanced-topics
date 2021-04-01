import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shubham",
    };
    console.log("LifeCycle A constructor");
  }

  static getDerivedStateFromProps(state, props) {
      
    console.log("Life Cycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
      setTimeout(() => {
          this.setState({
              name : "Hello React Application"
          })
      }, 2000)
    console.log("LifeCycle A componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCyCleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  Change = () => {
      this.setState({
          name : "Hello React Application"
      })
  } 

  render() {
    console.log("LifeCycle A render");
    return (
      <div>
        LifeCycle A <b>{this.state.name}</b>
        <button onClick={this.Change} >On Click</button>
        <LifeCycleB />
      </div>
    );
  }
}
