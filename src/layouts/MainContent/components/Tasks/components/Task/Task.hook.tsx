import { useState, useReducer, ReducerWithoutAction } from 'react';

import { TaskProps } from './Task';
import TaskActions from '@services/actions/tasks';

const reducer: ReducerWithoutAction<any> = (state, action) => {
  switch(action.type) {
    case 'title':
      return { ...state, title: action.value };
    case 'description':
      return { ...state, description: action.value };
  }
}

const useTask = (props: TaskProps) => {
  const { id, title, description } = props.data;
  const [isEditMode, setIsEditMode] = useState(false); 
  const [task, dispatch] = useReducer(reducer, {
    id,
    title,
    description,
  });

  const onChangeHandler: (type: string, value: string) => void = (type, value) => dispatch({ type, value });

  const onSaveTask = async (): Promise<void> => {
    try {
      await TaskActions.update(id, task);
    } catch(error) {
      console.log('onSaveTaskError', error);
    }
  }

  return {
    isEditMode, setIsEditMode,
    task, onChangeHandler,
    onSaveTask,
  }
}

export default useTask;