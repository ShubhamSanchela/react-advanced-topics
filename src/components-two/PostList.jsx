import axios from "axios";
import React, { Component } from "react";

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMsg: "Error in Retrieving Data",
        });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h3>List of Posts</h3>
        {posts.length
          ? posts.map((post) => (
              <div key={post.id}>
                <table>
                  <tbody>
                    <td>{post.category}</td>
                    <td>{post.price}</td>
                  </tbody>
                </table>
                {post.category}
                
                {post.title}
                <img src={post.image} alt="" width="200px"/>
                {post.description}
              </div>
            ))
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}
