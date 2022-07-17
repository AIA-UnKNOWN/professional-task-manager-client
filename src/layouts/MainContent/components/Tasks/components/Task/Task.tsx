import React, { useState } from 'react';
import { FaCheckCircle, FaRegCheckCircle, FaAngleDown } from 'react-icons/fa';

import Container from '@common/Container';
import TaskEdit from './components/TaskEdit';

export interface TaskInterface {
  isCompleted: boolean,
  title: string,
}

const Task: React.FC<{
  data: TaskInterface
}> = ({
  data
}) => {
  const {
    isCompleted,
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
          />
        ) : (
        <>
          <div className="flex items-center">
            <span className="text-[15px]">
              {isCompleted ? (
                <FaCheckCircle />
              ) : (
                <FaRegCheckCircle />
              )}
            </span>
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