import React from 'react';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';

import { TaskInterface } from '@layouts/MainContent/components/Tasks/components/Task';
import { TextArea, TaskModifierPanel, TaskActions } from './components';

const TaskEdit: React.FC<{
  data: TaskInterface
}> = ({ data }) => {
  const {
    isCompleted,
    title
  } = data;

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-1 pt-5">
        <span className="text-[15px]">
          {isCompleted ? (
            <FaCheckCircle />
          ) : (
            <FaRegCheckCircle />
          )}
        </span>
        <TextArea />
        <TaskActions />
      </div>
      <TaskModifierPanel />
    </div>
  );
}

export default TaskEdit;