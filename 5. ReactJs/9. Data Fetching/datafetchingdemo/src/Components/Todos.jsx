import React, { useEffect, useState } from "react";
import axios from "axios";

function Todos() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    let getTodos = async () => {
      try {
        let response = await axios.get("https://training-projects-be1ba-default-rtdb.firebaseio.com/posts/post1.json");
        console.log(response)
        setTodos(response.data.todos);
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    getTodos();
  });
  return (
    <div>
      {todos && todos.length > 0 ? (
        todos.map((t) => {
          return <h3>{t.todo}</h3>;
        })
      ) : (
        <h1>No todos available</h1>
      )}
    </div>
  );
}

export default Todos;
