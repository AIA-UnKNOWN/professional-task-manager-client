import React from 'react';

interface TextAreaProps {
  onChangeHandler: (type: string, value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
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
        />
        <textarea
          className="placeholder:text-[14px] bg-light-gray-2 resize-none
          focus:outline-none h-[100px]"
          name="task-description"
          id="task-description"
          placeholder="Description"
          onChange={e => onChangeHandler('description', e.target.value)}
        >
        </textarea>
      </div>
    </div>
  );
}

export default TextArea;