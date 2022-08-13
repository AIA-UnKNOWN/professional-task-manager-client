import { useEffect, useState } from 'react';
import { useAppSelector } from '@services/store';

const useCompletedTasks = () => {
  const [ tasks ] = useAppSelector(state => [ state.tasks ]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    getAllCompletedTasks();
  }, [tasks.projectId, tasks.data]);

  const getAllCompletedTasks = (): void => {
    const completedTasks = tasks.data?.filter(task => task.is_completed);
    setCompletedTasks(completedTasks);
  }

  return {
    completedTasks,
  }
}

export default useCompletedTasks;