import React from 'react';

import Task, { TaskInterface } from '@layouts/MainContent/components/Tasks/components/Task';

const PendingTasksList: React.FC<{
  tasks: Array<TaskInterface>;
}> = ({
  tasks,
}) => {
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