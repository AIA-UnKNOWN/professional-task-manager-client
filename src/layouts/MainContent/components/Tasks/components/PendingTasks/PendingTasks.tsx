import React from 'react';

import usePendingTasks from './PendingTasks.hook'
import DefaultTasks from '@layouts/MainContent/components/Tasks/components/DefaultTasks';

const PendingTasks: React.FC = () => {
  const { pendingTasks } = usePendingTasks();

  return (
    <DefaultTasks
      title="Pending Tasks"
      tasks={pendingTasks}
    />
  );
}

export default PendingTasks;