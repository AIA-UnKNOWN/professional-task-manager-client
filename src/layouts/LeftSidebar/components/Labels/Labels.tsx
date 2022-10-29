import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import useLabels from './Labels.hook';
import ActionDropdown from '@common/ui/ActionDropdown';
import LabelsList from './components/LabelsList';
import AddLabelField from './components/AddLabelField';

const Labels: React.FC = () => {
  const {
    createLabel,
    deleteLabel,
  } = useLabels();

  return (
    <div>
      <div className="flex text-[25px] justify-between items-center">
        <span className="font-bold">Labels</span>
        <ActionDropdown
          displayedContentComponent={<FaPlusCircle />}
          dropdownComponent={(
            <AddLabelField
              onAddLabel={labelName => createLabel({ name: labelName })}
            />
          )}
          dropdownComponentClassName='z-[1]'
        />
      </div>
      <LabelsList
        onDeleteLabel={deleteLabel}
      />
    </div>
  );
}

export default Labels;