import { useEffect, useState, useReducer, ReducerWithoutAction } from 'react';

import { TaskProps } from './Task';
import TaskActions from '@services/actions/tasks';

const reducer: ReducerWithoutAction<any> = (state, action) => {
  switch(action.type) {
    case 'title':
      return { ...state, title: action.value };
    case 'description':
      return { ...state, description: action.value };
    case 'is_completed':
      return { ...state, is_completed: action.value };
  }
}

const useTask = (props: TaskProps) => {
  const { id, title, description, is_completed } = props.data;
  const [isEditMode, setIsEditMode] = useState(false); 
  const [task, dispatch] = useReducer(reducer, {
    id,
    title,
    description,
    is_completed,
  });

  const onChangeHandler: (type: string, value: string) => void = (type, value) => dispatch({ type, value });

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
      response.status === 200 && dispatch({
        type: 'is_completed',
        value: !is_completed
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