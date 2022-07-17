import React from 'react';
import { FaFlag, FaTags } from 'react-icons/fa';

const TaskModifierPanel: React.FC = () => {
  return (
    <div className="flex justify-between pb-5 pt-2">
      <div>
        <button
          className="w-[60px] h-[25px] bg-light-gray text-[12px]
          rounded-[20px] mr-2"
        >
          Cancel
        </button>
        <button
          className="w-[60px] h-[25px] bg-light-gray text-[12px]
          rounded-[20px]"
        >
          Save
        </button>
      </div>
      <div>
        <button
          className="text-[20px] mr-3"
        >
          <FaFlag />
        </button>
        <button
          className="text-[20px]"
        >
          <FaTags />
        </button>
      </div>
    </div>
  );
}

export default TaskModifierPanel;