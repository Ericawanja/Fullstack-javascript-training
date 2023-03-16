import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  todos: [],
};
export const fetchTodos = createAsyncThunk(
  "todos/fetch",
  async (_, thunkApi) => {
    try {
      let response = await axios.get(
        `https://todos-12a89-default-rtdb.firebaseio.com/todos.json`
      );
      console.log(response.data);
      let data = [];
      let keys = Object.keys(response.data);
      console.log(keys);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        data.push({ ...response.data[key], id: key });
      }
      console.log(data);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (id, thunkApi) => {
    try {
      console.log(`deleting an item ${id}`);
      const deletedItem = await axios.delete(
        `https://todos-12a89-default-rtdb.firebaseio.com/todos/${id}.json`
      );
      thunkApi.dispatch(fetchTodos());
      return;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
export const createTodo = createAsyncThunk(
  "todos/adding",
  async (payload, thunkApi) => {
    try {
      console.log(payload);
      const newTodo = await axios.post(
        `https://todos-12a89-default-rtdb.firebaseio.com/todos.json`,
        {
          ...payload,
        }
      );

      thunkApi.dispatch(fetchTodos());
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const completeTodo = createAsyncThunk(
  "todos/completed",
  async (payload, thunkApi) => {
    let id = payload.id
    let completed = payload.completed ? false :true
  
    try {
      let response = await axios.put(
        `https://todos-12a89-default-rtdb.firebaseio.com/todos/${id}.json`, {
          title: payload.title,
          completed
        }
      );
      thunkApi.dispatch(fetchTodos())
      return;
    } catch (error) {}
  }
);
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
      console.log("loading...");
      state.loading = true;
      state.error = "";
      state.todos = [];
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log("rejected...");
      state.loading = false;
      state.error = action.payload;
      state.todos = [];
    });
    builder.addCase(deleteTodo.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createTodo.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(completeTodo.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(completeTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(completeTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { changeCompletedStatus, addTodo } = todosSlice.actions;
export default todosSlice.reducer;
