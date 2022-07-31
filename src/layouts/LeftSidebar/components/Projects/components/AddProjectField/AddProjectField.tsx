import React, { useState } from 'react';

const AddProjectField: React.FC<{
  onAddProject(projectName: string): void;
}> = ({
  onAddProject
}) => {
  const [projectName, setProjectName] = useState('');

  return (
    <div className='flex bg-light-gray-2 p-1 shadow-md rounded-md'>
      <input
        className='w-[150px] h-[34px] text-[14px] px-2 outline-1 outline-light-black'
        type="text"
        placeholder='Project name'
        value={projectName}
        onChange={e => setProjectName(e.target.value)}
        autoFocus
      />
      <button
        className="text-[15px] bg-light-gray-3 w-[60px] h-[34px]
        rounded-md ml-1"
        onClick={() => {
          onAddProject(projectName);
          setProjectName('');
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddProjectField;