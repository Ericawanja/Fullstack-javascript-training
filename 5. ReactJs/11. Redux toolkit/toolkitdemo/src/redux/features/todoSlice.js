import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "Study", completed: false },
    { id: 2, title: "Go through the code", completed: true },
    { id: 3, title: "Debug the code", completed: false },
    { id: 4, title: "Read the book", completed: true },
  ],
};

const todosSlice = createSlice({
  name: "todos slice",
  initialState,
  reducers: {
    changeCompletedStatus: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
      return state;
    },
    addTodo: (state, { payload }) => {
      console.log(payload);
       state.todos.push(payload)
      return state;
    },
  },
});

export const { changeCompletedStatus, addTodo } = todosSlice.actions;
export default todosSlice.reducer;
