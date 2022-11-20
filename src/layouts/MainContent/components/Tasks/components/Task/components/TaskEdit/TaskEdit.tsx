import React from 'react';

import Checkbox from '@common/ui/Checkbox';
import { TaskEditInterface, TaskInterface } from 'constants/interfaces';
import { TextArea, TaskModifierPanel, TaskActions } from './components';
import useTaskEdit from './TaskEdit.hook';

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
  const {
    setTaskLabelByLabelId,
  } = useTaskEdit();

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
        data={data}
        saveButtonText={saveButtonText}
        onCancel={onCancelTask}
        onSave={onSaveTask}
        setTaskLabelByLabelId={labelId => setTaskLabelByLabelId(labelId, data)}
      />
    </div>
  );
}

export default TaskEdit;