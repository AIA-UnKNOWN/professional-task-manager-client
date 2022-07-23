import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@services/store';

import TasksActions from '@services/actions/tasks';
import { setTasks } from '@services/reducers/tasks';

const useTask = () => {
  const [ tasks ] = useAppSelector(state => [
    state.tasks,
  ]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllTasks();
  }, [tasks.projectId]);

  const getAllTasks = async (): Promise<void> => {
    const projectId = tasks.projectId;
    try {
      const tasks = await TasksActions.getAll(projectId);
      dispatch(setTasks(tasks));
    } catch(error) {
      console.log('GetAllTasksError', error);
    }
  }

  return {}
}

export default useTask;