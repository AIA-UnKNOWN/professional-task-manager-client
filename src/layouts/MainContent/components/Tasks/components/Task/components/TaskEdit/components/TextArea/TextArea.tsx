import React from 'react';

import { TextAreaProps } from '@constants/interfaces';

const TextArea: React.FC<TextAreaProps> = ({
  task,
  onChangeHandler
}) => {
  return (
    <div className="flex-1 mx-4">
      <div className="flex flex-col">
        <input
          className="placeholder:text-[14px] bg-light-gray-2
          focus:outline-none border-b border-light-gray-3"
          type="text"
          placeholder="Title"
          onChange={e => onChangeHandler('title', e.target.value)}
          value={task.title}
        />
        <textarea
          className="placeholder:text-[14px] bg-light-gray-2 resize-none
          focus:outline-none h-[100px]"
          name="task-description"
          id="task-description"
          placeholder="Description"
          onChange={e => onChangeHandler('description', e.target.value)}
          value={task.description || ''}
        >
        </textarea>
      </div>
    </div>
  );
}

export default TextArea;