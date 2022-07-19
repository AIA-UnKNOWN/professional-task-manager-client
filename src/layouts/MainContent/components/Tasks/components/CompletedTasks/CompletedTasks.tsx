import React from 'react';

import useCompletedTasks from './CompletedTasks.hook';
import DefaultTasks from '@layouts/MainContent/components/Tasks/components/DefaultTasks';

const CompletedTasks: React.FC = () => {
  const { completedTasks } = useCompletedTasks();
  
  return (
    <div>
      <DefaultTasks
        title="Completed Tasks"
        tasks={completedTasks}
      />
    </div>
  );
}

export default CompletedTasks;