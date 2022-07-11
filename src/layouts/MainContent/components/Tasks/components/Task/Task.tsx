import React from 'react';
import { FaCheckCircle, FaRegCheckCircle, FaAngleDown } from 'react-icons/fa';

import Container from '@common/Container';

const Task: React.FC<{
  isCompleted: boolean,
  title: string,
}> = ({
  isCompleted,
  title
}) => {
  return (
    <Container
      className="bg-light-gray-2 mb-[10px] last-of-type:mb-0"
    >
      <div className="flex items-center justify-between h-[50px] px-5">
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
        <span className="text-[25px]">
          <FaAngleDown />
        </span>
      </div>
    </Container>
  );
}

export default Task;