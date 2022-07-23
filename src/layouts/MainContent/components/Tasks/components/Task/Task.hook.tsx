import { useState, useReducer, ReducerWithoutAction } from 'react';

const reducer: ReducerWithoutAction<any> = (state, action) => {
  switch(action.type) {
    case 'title':
      return { ...state, title: action.value };
    case 'description':
      return { ...state, description: action.value };
  }
}

const useTask = ({ data }) => {
  const { id, is_completed, title, description } = data;
  const [isEditMode, setIsEditMode] = useState(false); 
  const [task, dispatch] = useReducer(reducer, {
    id,
    title,
    description,
  });

  const onChangeHandler: (type: string, value: string) => void = (type, value) => dispatch({ type, value });

  const onSaveTask: () => void = () => {
    console.debug('onSaveTask', task);
  }

  return {
    isEditMode, setIsEditMode,
    task, onChangeHandler,
    onSaveTask,
  }
}

export default useTask;