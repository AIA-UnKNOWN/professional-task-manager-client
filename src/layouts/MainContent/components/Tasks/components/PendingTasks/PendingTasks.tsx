import React from 'react';

import usePendingTasks from './PendingTasks.hook'
import DefaultTasks from '@layouts/MainContent/components/Tasks/components/DefaultTasks';

const PendingTasks: React.FC = () => {
  const { tasks } = usePendingTasks();

  return (
    <DefaultTasks
      title="Pending Tasks"
      tasks={tasks}
    />
  );
}

export default PendingTasks;