import './LabelList.css';
import React from 'react';

import useLabelsList from './LabelsList.hook';

const LabelsList: React.FC = ({
  onDeleteLabel,
}) => {
  const {
    // states
    labels,
    navigation,
    // reducers
    setNavigationById,
    getAllTasksByLabelId,
  } = useLabelsList();

  if (!labels.length) return (
    <div className='project mb-1 relative'>
      <div
        className={`
          rounded-[10px] text-[15px] w-[211px] h-[34px] flex justify-center
          items-center px-4 bg-light-gray
        `}
      >
          <span>No labels</span>
      </div>
    </div>
  );

  return (
    <div className="my-2">
      {labels.map(label => {
        const pendingTasksCount = label.tasks?.filter(task => !task.is_completed)?.length || 0;

        return (
          <div
            className="label mb-1 last-of-type:mb-0 relative"
            key={label.id}
            onClick={() => {
              setNavigationById(label.id);
              getAllTasksByLabelId(label.id);
            }}
          >
            <div
              className={`
                rounded-[10px] text-[15px] w-[211px] h-[34px] flex justify-between
                items-center px-4 cursor-pointer hover:bg-light-gray-3
                ${label.id === navigation.id && navigation.categoryName === 'LABEL'
                  ? 'bg-light-gray-3'
                  : 'bg-light-gray'}
              `}
            >
              <span>
                {label.name}
              </span>
              <span className="font-bold">
                {pendingTasksCount}
              </span>
            </div>
            <div
              className={`delete-button absolute top-[50%] left-[100%] -translate-y-[50%]`}
            >
              <button
                className='bg-red text-white px-2 py-1 rounded-md text-[14px] ml-2'
                onClick={() => onDeleteLabel(label.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default LabelsList;