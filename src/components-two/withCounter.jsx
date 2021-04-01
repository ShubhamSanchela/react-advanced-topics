import React from "react";
import { Component } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    counterIncrement = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      return (
        <WrappedComponent
         
          count={this.state.count}
          countIncrement={this.counterIncrement}
          {...this.props}
        />
      );
    }
  }
  return WithComponent;
};

export default withCounter;
