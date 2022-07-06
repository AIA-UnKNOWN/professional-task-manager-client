import { configureStore } from "@reduxjs/toolkit";
import projects from './reducers/projects';

const store = configureStore({
  reducer: {
    projects,
  }
});

export default store;