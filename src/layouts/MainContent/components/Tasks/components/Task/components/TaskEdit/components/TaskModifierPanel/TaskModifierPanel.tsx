import React from 'react';
import { FaFlag, FaTags } from 'react-icons/fa';
import { useAppSelector } from '@services/store';

import { TaskModifierPanelInterface } from '@constants/interfaces';
import ActionDropdown from '@common/ui/ActionDropdown';
import Checkbox from '@common/ui/Checkbox';

const TaskModifierPanel: React.FC<TaskModifierPanelInterface> = ({
  data,
  saveButtonText,
  onCancel,
  onSave,
  setTaskLabelByLabelId,
}) => {
  const [
    labels,
    tasks,
  ] = useAppSelector(state => [
    state.labels,
    state.tasks,
  ]);

  const task = tasks?.data?.find(tasks => tasks.id === data.id);

  return (
    <div className="flex justify-between pb-3 pt-2">
      <div>
        <button
          className="w-[60px] h-[25px] bg-light-gray text-[12px]
          rounded-[20px] mr-2"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="w-[60px] h-[25px] bg-light-gray text-[12px]
          rounded-[20px]"
          onClick={onSave}
        >
          {saveButtonText || 'Save'}
        </button>
      </div>
      <div>
        <button
          className="text-[20px] mr-3 hover:bg-light-gray-3 p-2 rounded-full"
        >
          <ActionDropdown
            displayedContentComponent={<FaFlag />}
            dropdownComponentClassName="z-[1] top-[150%] min-w-max"
            dropdownComponent={
              <ul className='bg-light-gray rounded-md'>
                {labels.data.map(label => (
                  <li
                    key={label.id}
                    className='text-[16px] hover:bg-light-gray-3 rounded-md flex justify-between
                    items-center py-1 px-3'
                  >
                    <span className='mr-2'>
                      {label.name}
                    </span>
                    <Checkbox
                      isCheck={task.label_id === label.id}
                      onChange={value => setTaskLabelByLabelId(label.id)}
                    />
                  </li>
                ))}
              </ul>
            }
          />
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