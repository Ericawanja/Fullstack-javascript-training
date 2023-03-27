import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function Posts() {
  useQuery("getting posts", () => {
   return axios.get("https://dummyjson.com/todos");
  });
  return <div>Posts</div>;
}

export default Posts;
