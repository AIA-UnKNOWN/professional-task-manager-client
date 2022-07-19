import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@services/store';

import TasksActions from '@services/actions/tasks';
import { setTasks } from '@services/reducers/tasks';

const usePendingTasks = () => {
  const [ tasks ] = useAppSelector(state => [
    state.tasks.data,
  ]);
  const dispatch = useAppDispatch();
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async (): Promise<void> => {
    try {
      const tasks = await TasksActions.getAll(2);
      dispatch(setTasks(tasks));
      setPendingTasks(tasks.filter(task => !task.is_completed));
    } catch(error) {
      console.log('GetAllTasksError', error);
    }
  }

  return {
    pendingTasks,
  }
}

export default usePendingTasks;