import React from 'react';

import PendingTasks from './components/PendingTasks';
import CompletedTasks from './components/CompletedTasks';

const Tasks: React.FC = () => {
  return (
    <div>
      <PendingTasks />
      <div></div>
      <CompletedTasks />
    </div>
  );
}

export default Tasks;