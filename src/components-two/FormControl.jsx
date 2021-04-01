import React, { Component } from "react";

export default class FormControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log(event.target[0])
    event.preventDefault();
  }

  render() {
    const {email, password} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>E-mail</label>
          <input type="text" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" value={password} onChange={this.handleChange} />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}
