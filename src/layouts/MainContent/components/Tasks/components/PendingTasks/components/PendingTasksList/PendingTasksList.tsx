import React from 'react';

import usePendingTasksList from './PendingTasksList.hook';
import Task from '@layouts/MainContent/components/Tasks/components/Task';

const PendingTasksList: React.FC = () => {
  const { tasks } = usePendingTasksList();

  return (
    <div className="mt-5">
      {tasks.map(task => (
        <Task
          key={task.id}
          isCompleted={task.is_completed}
          title={task.title}
        />
      ))}
    </div>
  );
}

export default PendingTasksList;