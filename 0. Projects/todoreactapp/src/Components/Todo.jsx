import React, { useState } from "react";
import "../App.css";

function Todo() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "clean today",
      description: "do the cleaning today",
      status: "pending",
    },
    {
      id: 2,
      title: "cook",
      description: "Cook the meal today",
      status: "pending",
    },
    {
      id: 3,
      title: "cook",
      description: "Cook the meal today",
      status: "pending",
    },
  ]);

  return (
    <>
      <div className="todoContainer">
        <div className="header">
          <div className="welcome">Welcome back</div>
          <div className="createBtn"> + Add</div>
        </div>
        <div className="todoList">
          {data.length > 0 ? (
            data.map((item) => {
              return (
                <div className="todo" key={item.id}>
                  <div className="check">
                    <input type="checkbox" name="" id="checkBtn" />
                  </div>

                  <div className="details">
                    <div className="title">{item.title}</div>
                    <div className="desc">{item.description}</div>
                  </div>
                  <div className="icons">
                    <span className="delete">Delete</span>
                    <span className="edit">Edit</span>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>There are no todos available</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Todo;
