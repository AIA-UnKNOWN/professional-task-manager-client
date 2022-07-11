import { createSlice } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  description: string | null;
  is_completed: boolean;
  project_id: number;
  label_id: number | null;
}

interface TasksState {
  projectId: number | null;
  data: Array<Task>;
}

interface Action {
  payload: Array<Task>;
}

interface SetProjectIdAction {
  payload: number;
}

const initialState: TasksState = {
  projectId: null,
  data: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setProjectId: (state: TasksState, action: SetProjectIdAction) => {
      state = {
        ...state,
        projectId: action.payload
      }
    },
    setTasks: (state: TasksState, action: Action) => {
      state.data = action.payload;
    },
  }
});

export const { setProjectId, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;