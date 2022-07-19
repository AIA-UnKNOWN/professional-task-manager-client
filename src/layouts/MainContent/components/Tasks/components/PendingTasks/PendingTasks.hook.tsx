import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@services/store';

import TasksActions from '@services/actions/tasks';
import { setTasks } from '@services/reducers/tasks';

const usePendingTasks = () => {
  const [ tasks ] = useAppSelector(state => [
    state.tasks,
  ]);
  const dispatch = useAppDispatch();
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, [tasks.projectId]);

  const getAllTasks = async (): Promise<void> => {
    const projectId = tasks.projectId;
    try {
      const tasks = await TasksActions.getAll(projectId);
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