import React from 'react';

const AddProjectField: React.FC<{
  onAddProject(): void;
}> = ({
  onAddProject
}) => {
  return (
    <div className='flex bg-light-gray-2 p-1 shadow-md rounded-md'>
      <input
        className='w-[150px] h-[34px] text-[14px] px-2 outline-1 outline-light-black'
        type="text"
        placeholder='Project name'
        autoFocus
      />
      <button
        className="text-[15px] bg-light-gray-3 w-[60px] h-[34px]
        rounded-md ml-1"
        onClick={onAddProject}
      >
        Add
      </button>
    </div>
  );
}

export default AddProjectField;