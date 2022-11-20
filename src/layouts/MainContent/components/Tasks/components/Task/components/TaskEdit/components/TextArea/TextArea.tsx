import './TextArea.css';
import React from 'react';
import ReactQuill from 'react-quill';

import { TextAreaProps } from '@constants/interfaces';

const TextArea: React.FC<TextAreaProps> = ({
  task,
  onChangeHandler
}) => {
  return (
    <div className="textarea flex-1 mx-4">
      <div className="flex flex-col">
        <input
          className="placeholder:text-[14px] bg-light-gray-2
          focus:outline-none border-b border-light-gray-3"
          type="text"
          placeholder="Title"
          onChange={e => onChangeHandler('title', e.target.value)}
          value={task.title}
        />
        <ReactQuill
          theme="snow"
          placeholder="Desciption"
          value={task.description}
          onChange={value => onChangeHandler('description', value)}
        />
      </div>
    </div>
  );
}

export default TextArea;