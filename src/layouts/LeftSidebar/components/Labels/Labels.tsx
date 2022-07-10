import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import useLabels from './Labels.hook';
import LabelsList from './components/LabelsList';

const Labels: React.FC = () => {
  return (
    <div>
      <div className="flex text-[25px] justify-between items-center">
        <span className="font-bold">Labels</span>
        <FaPlusCircle />
      </div>
      <LabelsList />
    </div>
  );
}

export default Labels;