import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@services/store';

import { TaskProps, TaskInterface } from './Task';
import TaskActions from '@services/actions/tasks';
import { setTasks } from '@services/reducers/tasks';

const useTask = (props: TaskProps) => {
  const [ tasks ] = useAppSelector(state => [ state.tasks ]);
  const dispatch = useAppDispatch();
  const { id, title, description, is_completed } = props.data;
  const [isEditMode, setIsEditMode] = useState(false);
  const [task, setTask] = useState({
    id,
    title,
    description,
    is_completed,
  });

  const onChangeHandler: (type: string, value: any) => void = (type, value) => {
    switch(type) {
      case 'title':
        return setTask({ ...task, title: value });
      case 'description':
        return setTask({ ...task, description: value });
      case 'is_completed':
        return setTask({ ...task, is_completed: value });
    }
  };

  const onSaveTask = async (): Promise<void> => {
    try {
      await TaskActions.update(id, task);
    } catch(error) {
      console.log('onSaveTaskError', error);
    }
  }

  const onChangeTaskStatus = async (): Promise<void> => {
    const updatedTask = { ...task, is_completed: !is_completed };
    try {
      const response = await TaskActions.update(id, updatedTask);
      if (response.data !== "OK") return;
      setTask(updatedTask);
      updateTasksRedux(updatedTask.id, updatedTask);
    } catch(error) {
      console.log('onSaveTaskError', error);
    }
  }

  const updateTasksRedux = (id: number, updatedTask: TaskInterface): void => {
    tasks.data && tasks.data.length > 0 &&
      dispatch(
        setTasks(tasks.data.map(task => {
          return parseInt(task.id) !== id ?
            task :
            updatedTask;
        }))
      );
  }

  return {
    isEditMode, setIsEditMode,
    task, onChangeHandler,
    onSaveTask,
    onChangeTaskStatus,
  }
}

export default useTask;