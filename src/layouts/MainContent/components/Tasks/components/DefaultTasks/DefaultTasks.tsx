import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import { DefaultTasksInterface } from '@constants/interfaces';
import useDefaultTasks from './DefaultTasks.hook';
import Container from '@common/Container';
import DefaultTasksList from './components/DefaultTasksList';

const DefaultTasks: React.FC<DefaultTasksInterface> = ({
  title,
  tasks,
}) => {
  const { createTask } = useDefaultTasks();

  return (
    <Container className="bg-light-gray w-[500px] py-5 px-7 h-fit">
      <div className="flex justify-between items-center">
        <p className="text-[25px] font-bold">{title}</p>
        <span
          className="text-[25px] cursor-pointer"
          onClick={createTask}
        >
          <FaPlusCircle />
        </span>
      </div>
      {tasks?.length > 0 ? (
        <DefaultTasksList tasks={tasks} />
      ) : (
        <Container className="flex justify-center items-center
        h-[50px] bg-light-gray-2 mt-5 text-[14px]">
          <p>No tasks here</p>          
        </Container>
      )}
    </Container>
  );
}

export default DefaultTasks;