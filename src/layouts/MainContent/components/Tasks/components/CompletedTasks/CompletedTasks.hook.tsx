import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@services/store';

import TasksActions from '@services/actions/tasks';
import { setTasks } from '@services/reducers/tasks';

const useCompletedTasks = () => {
  const [ tasks ] = useAppSelector(state => [ state.tasks ]);
  const dispatch = useAppDispatch();
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    getAllCompletedTasks();
  }, [tasks.projectId]);

  const getAllCompletedTasks = async (): Promise<void> => {
    const projectId = tasks.projectId;
    try {
      const tasks = await TasksActions.getAll(projectId);
      dispatch(setTasks(tasks));
      setCompletedTasks(tasks.filter(task => task.is_completed));
    } catch(error) {
      console.log('GetAllTasksError', error);
    }
  }

  return {
    completedTasks,
  }
}

export default useCompletedTasks;