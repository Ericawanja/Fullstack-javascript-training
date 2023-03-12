import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { changeStatus } from "./redux/features/todosSlice";

function App() {
  let dispatch = useDispatch();
  let [show, setShow] = useState(false);
  let { todos } = useSelector((state) => state);
  console.log(todos);
  return (
    <div className="container">
      <div className="header">
        <div className="welcome">Welcome back</div>
        <div className="createBtn"> + Add</div>
      </div>
      <div className="wrapper">
        {todos?.length > 0 ? (
          todos.map((todo) => {
            return (
              <div class="todo" key={todo.id}>
                <div class="check">
                  <input
                    type="checkbox"
                    name=""
                    id="checkBtn"
                    onChange={() => dispatch(changeStatus(todo.id))}
                  />
                </div>

                <div class="details">
                  <div class="title">{todo.text}</div>
                  <div class="desc">Completed {`${todo.completed}`}</div>
                </div>
                <div class="icons">
                  <span class="delete">Delete</span>
                  <span class="edit">Edit</span>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No todos available</h1>
        )}
      </div>
      {show && (
        <div className="createForm">
          <div className="taskForm">
            <h1 id="form-title">Create Task</h1>
            <form>
              <label for="title">Task title</label>
              <input
                type="text"
                placeholder="Enter the task title"
                name="title"
                id="formTitle"
                required
              />

              <label for="task_desc">Task details</label>
              <input
                type="text"
                placeholder="Enter task details"
                name="taskDesc"
                id="taskDesc"
              />

              <h4 className="enterDetails">Enter all the details</h4>
              <div className="formBtns">
                <button type="button" className="cancel">
                  Cancel
                </button>
                <button type="button" className="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
