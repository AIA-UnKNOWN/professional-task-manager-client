import React from 'react';

import Checkbox from '@common/ui/Checkbox';
import { TaskInterface } from '@layouts/MainContent/components/Tasks/components/Task';
import { TextArea, TaskModifierPanel, TaskActions } from './components';

const TaskEdit: React.FC<{
  data: TaskInterface
}> = ({ data }) => {
  const {
    is_completed,
    title
  } = data;

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-1 pt-5">
        <Checkbox
          className="text-[15px]"
          isCheck={is_completed}
        />
        <TextArea />
        <TaskActions />
      </div>
      <TaskModifierPanel />
    </div>
  );
}

export default TaskEdit;