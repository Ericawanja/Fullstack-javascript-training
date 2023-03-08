import React, { useEffect, useState } from "react";

function Posts() {
  let [posts, setPosts] = useState([1,2,3,4,5]);
  let fetchPosts = async ()=>{
    let response = await fetch(`https://dummyjson.com/posts`)
    if(response.status === 200){
    let data = await  response.json()
    return data;}
    else{
        throw new Error("An error occured")
    }
  }
useEffect(()=>{
    let getData = async ()=>{
        let data = await fetchPosts()
        console.log(data)
        setPosts(data.posts)
    }
    getData()
}, [])
 
  return (
    <div>
        
      {posts && (posts.length > 0) ? (
        posts.map((p) => {
          return <h3 key={p.id}>{p.title}</h3>;
        })
      ) : (
        <h1>No posts available yet</h1>
      )}
    </div>
  );
}

export default Posts;
