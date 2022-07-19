import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@services/store';

import TasksActions from '@services/actions/tasks';
import { setTasks } from '@services/reducers/tasks';

const useCompletedTasks = () => {
  const [ tasks ] = useAppSelector(state => [ state.tasks.data ]);
  const dispatch = useAppDispatch();
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    getAllCompletedTasks();
  }, []);

  const getAllCompletedTasks = async (): Promise<void> => {
    try {
      const tasks = await TasksActions.getAll(2);
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