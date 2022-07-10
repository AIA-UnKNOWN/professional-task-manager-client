import React from 'react';

import useLabelsList from './LabelsList.hook';

const LabelsList: React.FC = () => {
  const { labels } = useLabelsList();

  return (
    <div className="my-2">
      {labels.map(label => (
        <div className="bg-light-gray rounded-[10px] text-[15px] w-[211px] h-[34px]
          flex justify-between items-center px-4 mb-1 cursor-pointer
          last-of-type:mb-0 hover:bg-light-gray-3"
          key={label.id}
        >
          <span>
            {label.name}
          </span>
          <span className="font-bold">
            0
          </span>
        </div>
      ))}
    </div>
  );
}

export default LabelsList;