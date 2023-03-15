import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { addTodo, changeCompletedStatus, fetchTodos } from "./redux/features/todoSlice";

function App() {
  let dispatch = useDispatch();
  let [show, setShow] = useState(false);
  let [inputTitle, setInputTitle] = useState("");

  let { todos } = useSelector((state) => state);

  const handleInputChange = (e) => {
    setInputTitle(e.target.value);
  };
  const handleAddTodo = () => {
    let id = Math.floor(Math.random() * 100);

    let newTodo = { id, title: inputTitle, completed: false };
    dispatch({ type: addTodo, payload: newTodo });
    setShow(false);
    setInputTitle("");
  };
  useEffect(() => {
    dispatch(fetchTodos())
  }, []);
  return (
    <div className="container">
      <div className="header">
        <div className="welcome">Welcome back</div>
        <div className="createBtn" onClick={() => setShow(!show)}>
          {" "}
          + Add
        </div>
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
                    checked={todo.completed}
                    onChange={() =>
                      dispatch({
                        type: changeCompletedStatus,
                        payload: todo.id,
                      })
                    }
                  />
                </div>

                <div class="details">
                  <div class="title">{todo.title}</div>
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
                value={inputTitle}
                onChange={handleInputChange}
                required
              />

              <h4 className="enterDetails">Enter all the details</h4>
              <div className="formBtns">
                <button type="button" className="cancel">
                  Cancel
                </button>
                <button
                  type="button"
                  className="submit"
                  onClick={handleAddTodo}
                >
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
