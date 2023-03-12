import { configureStore } from "@reduxjs/toolkit";
import  todoReducer from "../features/todosSlice";

export default configureStore({reducer:todoReducer})