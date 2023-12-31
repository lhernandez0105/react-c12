import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "Id: 1",
    title: "Tarea 1",
    completed: false,
    description: "Esto es una tarea",
  },
  {
    id: "Id: 2",
    title: "Tarea 2",
    completed: false,
    description: "Esto es una tarea",
  },
];

const userSlice = createSlice({
  name: "Tareas Actuales:",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = userSlice.actions;
export default userSlice.reducer;
