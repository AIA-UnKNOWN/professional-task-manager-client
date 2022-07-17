import React from 'react';

const TextArea: React.FC = () => {
  return (
    <div className="flex-1 mx-4">
      <div className="flex flex-col">
        <input
          className="placeholder:text-[14px] bg-light-gray-2
          focus:outline-none border-b border-light-gray-3"
          type="text"
          placeholder="Title"
        />
        <textarea
          className="placeholder:text-[14px] bg-light-gray-2 resize-none
          focus:outline-none h-[100px]"
          name="task-description"
          id="task-description"
          placeholder="Description"
        >
        </textarea>
      </div>
    </div>
  );
}

export default TextArea;