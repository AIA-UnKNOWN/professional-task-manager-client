import { createSlice } from '@reduxjs/toolkit';

interface Project {
  id: number;
  name: string;
}

interface ProjectsState {
  data: Array<Project>;
}

interface Action {
  payload: Array<Project>;
}

const initialState: ProjectsState = {
  data: [],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state: ProjectsState, action: Action) => {
      state.data = action.payload;
    },
  }
});

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;