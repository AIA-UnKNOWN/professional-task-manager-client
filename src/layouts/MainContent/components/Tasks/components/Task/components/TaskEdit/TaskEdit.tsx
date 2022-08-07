import React from 'react';

import Checkbox from '@common/ui/Checkbox';
import { TaskEditInterface, TaskInterface } from 'constants/interfaces';
import { TextArea, TaskModifierPanel, TaskActions } from './components';

const TaskEdit: React.FC<TaskEditInterface> = ({
  data,
  onCancelTask,
  saveButtonText,
  onSaveTask,
  onChangeHandler,
  onChangeTaskStatus,
  onDeleteTask,
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
        <TaskActions
          onDeleteTask={onDeleteTask}
        />
      </div>
      <TaskModifierPanel
        saveButtonText={saveButtonText}
        onCancel={onCancelTask}
        onSave={onSaveTask}
      />
    </div>
  );
}

export default TaskEdit;