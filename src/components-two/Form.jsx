import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topics: "react",
      email: "",
      password: "",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topics: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`);
    event.preventDefault();
  };

  handleChange = (event) => {
    const value =
      event.target.name === "password"
        ? event.target.value.toUpperCase().substr(0,10)
        : event.target.value;

    this.setState({
      [event.target.name]: value,
      //   [event.target.name]: event.target.value,
      //   [event.target.password]: event.target.value,
    });
  };

  render() {
    const { username, comments, topics, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName : </label>
          <input
            type="text"
            value={username}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label>Text Area : </label>
          <textarea
            value={comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>E-mail : </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Topics : </label>
          <select value={topics} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
