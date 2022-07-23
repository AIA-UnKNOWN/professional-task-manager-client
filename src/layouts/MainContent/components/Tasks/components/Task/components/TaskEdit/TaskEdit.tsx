import React from 'react';

import Checkbox from '@common/ui/Checkbox';
import { TaskInterface } from '@layouts/MainContent/components/Tasks/components/Task';
import { TextArea, TaskModifierPanel, TaskActions } from './components';

const TaskEdit: React.FC<{
  data: TaskInterface;
  onCancelTask: () => void;
  onSaveTask: () => void;
  onChangeHandler: (type: string, value: string) => void;
  onChangeTaskStatus(): void;
}> = ({
  data,
  onCancelTask,
  onSaveTask,
  onChangeHandler,
  onChangeTaskStatus,
}) => {
  const {
    is_completed,
  } = data;

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-1 pt-5">
        <Checkbox
          className="text-[15px]"
          isCheck={is_completed}
          onChange={onChangeTaskStatus}
        />
        <TextArea
          task={data}
          onChangeHandler={onChangeHandler}
        />
        <TaskActions />
      </div>
      <TaskModifierPanel
        onCancel={onCancelTask}
        onSave={onSaveTask}
      />
    </div>
  );
}

export default TaskEdit;