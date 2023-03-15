import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  todos: [
    { id: 1, title: "Study", completed: false },
    { id: 2, title: "Go through the code", completed: true },
    { id: 3, title: "Debug the code", completed: false },
    { id: 4, title: "Read the book", completed: true },
  ],
};
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkApi) => {
    try {
      let response = await axios.get(
        "https://training-projects-be1ba-default-rtdb.firebaseio.com/questions.json"
      );
      console.log(response.data);

      const keys = Object.keys(response.data);
      const data = [];
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        data.push({ ...response.data[key], id: key });
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteTodo = createAsyncThunk("todo/delete", async (id, thunkApi) => {
  console.log(id)
  try {
    let response = await axios.delete(
      `https://training-projects-be1ba-default-rtdb.firebaseio.com/questions/${id}.json`
    );
    thunkApi.dispatch(fetchTodos())
    return;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

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
      state.todos.push(payload);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.todos = [];
    });
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.error = "";
      state.todos = payload;
    });
    builder.addCase(fetchTodos.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.todos = [];
    });
    builder.addCase(deleteTodo.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.todos = [];
    });
    builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.error = "";
     
    });
    builder.addCase(deleteTodo.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.todos = [];
    });
  },
});

export const { changeCompletedStatus, addTodo } = todosSlice.actions;
export default todosSlice.reducer;
