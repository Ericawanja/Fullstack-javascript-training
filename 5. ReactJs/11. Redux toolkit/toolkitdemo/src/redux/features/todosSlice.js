import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
      status: 'Active',
      colors: ['red', 'blue']
    }
  }
 
  export const todoSlice = createSlice({
    name:'Todo App',
    initialState,
    reducers:{

    }
  })
 export const { } = todoSlice.actions 
 export default todoSlice.reducer
  