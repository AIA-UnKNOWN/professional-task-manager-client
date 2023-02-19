import { useEffect, useState } from 'react';
import { useAppSelector } from '@services/store';

const useCompletedTasks = () => {
  const [
    tasks,
    navigation,
  ] = useAppSelector(state => [
    state.tasks,
    state.navigation,
  ]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    getAllCompletedTasks();
  }, [navigation.id, tasks.data]);

  const getAllCompletedTasks = (): void => {
    const completedTasks = tasks.data?.filter(task => task.is_completed);
    setCompletedTasks(completedTasks);
  }

  return {
    completedTasks,
  }
}

export default useCompletedTasks;