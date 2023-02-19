import { useEffect, useState } from 'react';
import { useAppSelector } from '@services/store';

const usePendingTasks = () => {
  const [
    tasks,
    navigation,
  ] = useAppSelector(state => [
    state.tasks,
    state.navigation,
  ]);
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, [navigation.id, tasks.data]);

  const getAllTasks = (): void => {
    const pendingTasks = tasks.data?.filter(task => !task.is_completed);
    setPendingTasks(pendingTasks);
  }

  return {
    pendingTasks,
  }
}

export default usePendingTasks;