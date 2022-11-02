import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import projects from './reducers/projects';
import labels from './reducers/labels';
import tasks from './reducers/tasks';
import navigation from './reducers/navigation';

const store = configureStore({
  reducer: {
    projects,
    labels,
    tasks,
    navigation,
  }
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;