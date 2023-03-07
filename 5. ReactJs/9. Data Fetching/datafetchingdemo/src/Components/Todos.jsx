import { useEffect, useState } from "react";


function Todo() {
  const [todos, setTodos] = useState();
  const fetchPosts = async () => {
    let response = await fetch("https://dummyjson.com/todos");
    if (response.status === 200) {
      let data = await response.json()
     
      return data;
    }
    throw new Error("An error occured ");
  };
  useEffect( () => {
    const getTodos = async ()=>{
      let data = await fetchPosts()
      setTodos(data.todos)
    }
    getTodos();
    
  }, []);
  return (
    <div className="App">
      {todos && todos.length > 0 ? (
        todos.map((t) => {
          return <h1>{t.todo}</h1>
        })
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  );
}

export default Todo;
