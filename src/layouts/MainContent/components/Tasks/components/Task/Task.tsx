import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import Container from '@common/Container';
import TaskEdit from './components/TaskEdit';
import Checkbox from '@common/ui/Checkbox';

export interface TaskInterface {
  is_completed: boolean,
  title: string,
}

const Task: React.FC<{
  data: TaskInterface
}> = ({
  data
}) => {
  const {
    is_completed,
    title
  } = data;

  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <Container
      className="bg-light-gray-2 mb-[10px] last-of-type:mb-0"
    >
      <div className="flex items-center justify-between min-h-[50px] px-5">
        {isEditMode ? (
          <TaskEdit
            data={data}
            onCancelTask={() => setIsEditMode(false)}
            onSaveTask={() => null}
          />
        ) : (
        <>
          <div className="flex items-center">
            <Checkbox
              className="text-[15px]"
              isCheck={is_completed}
            />
            <p className="text-[14px] ml-5">
              {title}
            </p>
          </div>
          <span
            className="text-[25px] cursor-pointer"
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