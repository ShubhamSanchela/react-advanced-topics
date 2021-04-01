import React, { Component } from "react";

export default class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
  }

  componentDidMount(){
      this.inputRef.current.focus();
      console.log(this.inputRef);
  }

  clickHandle = () => {
      alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandle} >Click</button>
      </div>
    );
  }
}
