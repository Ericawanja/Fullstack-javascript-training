import React, { useState } from "react";
import "../App.css";

function Todo() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "clean today",
      description: "do the cleaning today",
      status: "pending",
      completed: false,
    },
    {
      id: 2,
      title: "cook",
      description: "Cook the meal today",
      status: "pending",
      completed: false,
    },
    {
      id: 3,
      title: "cook",
      description: "Cook the meal today",
      status: "pending",
      completed: true,
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
  });

  const handleFormDisplay = () => {
    setShowForm(!showForm);
  };
  const handleInputsChange = (event) => {
    const { name, value } = event.target;

    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = () => {
    let id = Math.ceil(Math.random() * 100000000);
    setData((prev) => [{ ...inputs, id, completed: false }, ...prev]);
    setShowForm(!showForm);
    setInputs({
      title: "",
      desc: "",
    });
  };
  const handleCancel = () => {
    setInputs({
      title: "",
      desc: "",
    });
  };

  const handleChecked = (id)=>{
    const newData = data.map(d=>{
      if(d.id === id) {
        return {
          ...d,
          completed: !d.completed
        }
      }else{
        return d
      }
    })
    setData(newData)
  }

  return (
    <>
      <div className="todoContainer">
        <div className="header">
          <div className="welcome">Welcome back</div>
          <div className="createBtn" onClick={handleFormDisplay}>
            {" "}
            + Add
          </div>
        </div>
        <div className="todoList">
          {data.length > 0 ? (
            data.map((item) => {
              return (
                <div className="todo" key={item.id}>
                  <div className="check">
                    <input
                      type="checkbox"
                      name=""
                      id="checkBtn"
                      checked={item.completed}
                      onChange={() => handleChecked(item.id)}
                    />
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
        {showForm && (
          <div className="createForm">
            <div className="taskForm">
              <h1 id="form-title">Create Task</h1>
              <form>
                <label htmlFor="title">Task title</label>
                <input
                  type="text"
                  placeholder="Enter the task title"
                  name="title"
                  id="formTitle"
                  value={inputs.title}
                  onChange={handleInputsChange}
                  required
                />

                <label htmlFor="task_desc">Task details</label>
                <input
                  type="text"
                  placeholder="Enter task details"
                  name="desc"
                  id="taskDesc"
                  value={inputs.desc}
                  onChange={handleInputsChange}
                />

                <h4 className="enterDetails">Enter all the details</h4>
                <div className="formBtns">
                  <button
                    type="button"
                    className="cancel"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="submit"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Todo;
