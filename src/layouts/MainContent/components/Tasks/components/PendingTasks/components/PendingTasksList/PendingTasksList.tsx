import React from 'react';

import usePendingTasksList from './PendingTasksList.hook';
import Task, { TaskInterface } from '@layouts/MainContent/components/Tasks/components/Task';

const PendingTasksList: React.FC = () => {
  const { tasks } = usePendingTasksList();

  return (
    <div className="mt-5">
      {tasks.map((task: TaskInterface) => (
        <Task
          key={task.id}
          data={task}
        />
      ))}
    </div>
  );
}

export default PendingTasksList;