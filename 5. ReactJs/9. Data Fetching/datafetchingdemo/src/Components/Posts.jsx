import axios from "axios";
import React, { useState, useEffect } from "react";

function Posts() {
  let [posts, setPosts] = useState();
  useEffect(() => {
    let getPosts = () => {
      axios
        .get("https://dummyjson.com/posts")
        .then((response) => {
            console.log(response.data.posts)
          setPosts(response.data.posts);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPosts()
  }, []);
  return (
    <div>
      {posts && posts.length > 0 ? (
        posts.map((p) => {
          return <h1>{p.title}</h1>;
        })
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  );
}

export default Posts;
