import { useState } from 'react';

import { TaskProps } from './Task';
import TaskActions from '@services/actions/tasks';

const useTask = (props: TaskProps) => {
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
    try {
      const response = await TaskActions.update(id, {
        ...task,
        is_completed: !is_completed
      });
      response.status === 200 && setTask({
        ...task,
        is_completed: !is_completed
      });
    } catch(error) {
      console.log('onSaveTaskError', error);
    }
  }

  return {
    isEditMode, setIsEditMode,
    task, onChangeHandler,
    onSaveTask,
    onChangeTaskStatus,
  }
}

export default useTask;