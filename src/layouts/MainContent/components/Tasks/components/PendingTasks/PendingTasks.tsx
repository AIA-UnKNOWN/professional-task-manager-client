import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import Container from '@common/Container';
import PendingTasksList from './components/PendingTasksList';

const PendingTasks: React.FC = () => {
  return (
    <Container className="bg-light-gray max-w-[500px] py-5 px-7">
      <div className="flex justify-between items-center">
        <p className="text-[25px] font-bold">Pending Tasks</p>
        <span className="text-[25px]">
          <FaPlusCircle />
        </span>
      </div>
      <PendingTasksList />
    </Container>
  );
}

export default PendingTasks;