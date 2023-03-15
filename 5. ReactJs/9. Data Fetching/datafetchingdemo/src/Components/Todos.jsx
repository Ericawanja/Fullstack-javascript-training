import React, { useEffect, useState } from "react";
import axios from "axios";

function Todos() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    let getTodos = async () => {
      try {
        let response = await axios.get(
          "https://training-projects-be1ba-default-rtdb.firebaseio.com/questions.json"
        );
        console.log(response.data);

        const keys = Object.keys(response.data);
        const data = [];
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          data.push(response.data[key]);
        }
        console.log(data);
        setTodos(data);
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    getTodos();
  }, []);
  let postData = async () => {
    let response = await axios.post(
      "https://training-projects-be1ba-default-rtdb.firebaseio.com/questions.json",
      {
        id7: "new question from post",
        title: "the new new title",
      }
    );
  };

  let removeData = async () => {
    let response = await axios.get(
      "https://training-projects-be1ba-default-rtdb.firebaseio.com/questions/question1.json"
    );
    console.log(response.data);
  };

  let updateData = async () => {
    let response = await axios.put(
      "https://training-projects-be1ba-default-rtdb.firebaseio.com/questions/question2.json",
      {
        id7: "new question from post",
        title: "the new new title of question 2 element now",
      }
    );
    console.log(response.data);
  };

  return (
    <div>
      <button onClick={postData}> post data</button>
      <button onClick={removeData}> remove data</button>
      <button onClick={updateData}> update data</button>
      {todos && todos.length > 0 ? (
        todos.map((t) => {
          return (
            <>
              <h3>{t.title}</h3>
            </>
          );
        })
      ) : (
        <>
          <h1>No todos available</h1>
        </>
      )}
    </div>
  );
}

export default Todos;
