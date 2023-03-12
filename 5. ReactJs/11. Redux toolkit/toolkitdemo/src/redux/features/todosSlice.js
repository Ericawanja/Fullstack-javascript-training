import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
};

export const todoSlice = createSlice({
  name: "Todo App",
  initialState,
  reducers: {
    changeStatus: (state, { payload }) => {
      state.todos = state.todos.map((t) => {
        if (t.id === payload) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      });
      return state
    },
  },
});
export const { changeStatus } = todoSlice.actions;
export default todoSlice.reducer;
