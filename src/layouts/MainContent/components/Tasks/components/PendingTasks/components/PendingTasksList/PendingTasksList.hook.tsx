import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@services/store';

import TasksActions from '@services/actions/tasks';
import { setTasks } from '@services/reducers/tasks';

const usePendingTasksList = () => {
  const [ tasks ] = useAppSelector(state => [
    state.tasks.data,
  ]);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async (): Promise<void> => {
    try {
      const tasks = await TasksActions.getAll(1);
      console.log(tasks);
    } catch(error) {
      console.log('GetAllTasksError', error);
    }
  }

  return {
    tasks,
  }
}

export default usePendingTasksList;