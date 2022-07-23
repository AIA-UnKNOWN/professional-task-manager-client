import { useEffect, useState } from 'react';
import { useAppSelector } from '@services/store';

const usePendingTasks = () => {
  const [ tasks ] = useAppSelector(state => [
    state.tasks,
  ]);
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, [tasks.projectId, tasks.data]);

  const getAllTasks = (): void => {
    const pendingTasks = tasks.data.filter(task => !task.is_completed);
    setPendingTasks(pendingTasks);
  }

  return {
    pendingTasks,
  }
}

export default usePendingTasks;