import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';

import ActionDropdown from '@common/ui/ActionDropdown';

const TaskActions: React.FC = () => {
  return (
    <div>
      <ActionDropdown
        displayedContentComponent={
          <button
            className="hover:bg-light-gray-3 p-1 rounded-full"
          >
            <FaEllipsisH />
          </button>
        }
        dropdownComponent={
          <ul className="bg-light-gray rounded-md">
            <li className="text-center p-1 px-2 text-[11px]
              rounded-md hover:bg-light-gray-3 cursor-pointer"
            >
              Delete
            </li>
          </ul>
        }
      />
    </div>
  );
}

export default TaskActions;