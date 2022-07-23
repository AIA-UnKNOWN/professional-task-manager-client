import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import useTask from './Task.hook';
import Container from '@common/Container';
import TaskEdit from './components/TaskEdit';
import Checkbox from '@common/ui/Checkbox';

export interface TaskInterface {
  id: number;
  is_completed: boolean;
  title: string;
  description: string;
}

export interface TaskProps {
  data: TaskInterface;
}

const Task: React.FC<TaskProps> = props => {
  const {
    isEditMode, setIsEditMode,
    task, onChangeHandler,
    onSaveTask,
    onChangeTaskStatus,
  } = useTask(props);

  return (
    <Container
      className="bg-light-gray-2 mb-[10px] last-of-type:mb-0"
    >
      <div className="flex items-center justify-between min-h-[50px] px-5">
        {isEditMode ? (
          <TaskEdit
            data={task}
            onCancelTask={() => setIsEditMode(false)}
            onSaveTask={onSaveTask}
            onChangeHandler={onChangeHandler}
          />
        ) : (
          <>
            <div className="flex items-center">
              <Checkbox
                className="text-[15px]"
                isCheck={task.is_completed}
                onChange={onChangeTaskStatus}
              />
              <p className="text-[14px] ml-5">
                {task.title}
              </p>
            </div>
            <span
              className="text-[25px] cursor-pointer hover:bg-light-gray-3
              rounded-full text-light-black"
              onClick={() => setIsEditMode(!isEditMode)}
            >
              <FaAngleDown />
            </span>
          </>
        )}
      </div>
    </Container>
  );
}

export default Task;