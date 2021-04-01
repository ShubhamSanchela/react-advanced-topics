import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonCliced, setIdFromButtonClicked] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonCliced}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.log("Ivalid data", error);
      });
  }, [idFromButtonCliced]);

  const handleClick = () => {
    setIdFromButtonClicked(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Data</button>
      <br />
      {posts.title}
      {/* {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))} */}
    </div>
  );
}

export default DataFetching;
