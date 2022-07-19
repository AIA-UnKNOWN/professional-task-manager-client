import React from 'react';

import PendingTasks from './components/PendingTasks';
import CompletedTasks from './components/CompletedTasks';

const Tasks: React.FC = () => {
  return (
    <div className="flex justify-center">
      <PendingTasks />
      <div className="w-[1px] bg-light-gray-3 mx-5"></div>
      <CompletedTasks />
    </div>
  );
}

export default Tasks;