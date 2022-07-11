import React from 'react';

import usePendingTasksList from './PendingTasksList.hook';
import Task from '@layouts/MainContent/components/Tasks/components/Task';

const PendingTasksList: React.FC = () => {
  usePendingTasksList();

  return (
    <div className="mt-5">
      <Task
        isCompleted
        title="Task 1"
      />
      <Task
        isCompleted
        title="Task 2"
      />
      <Task
        isCompleted={false}
        title="Task 3"
      />
    </div>
  );
}

export default PendingTasksList;