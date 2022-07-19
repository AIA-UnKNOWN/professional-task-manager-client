import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import Container from '@common/Container';
import DefaultTasksList from './components/DefaultTasksList';
import { TaskInterface } from '@layouts/MainContent/components/Tasks/components/Task';

const DefaultTasks: React.FC<{
  title: string;
  tasks: Array<TaskInterface>;
}> = ({
  title,
  tasks,
}) => {
  return (
    <Container className="bg-light-gray w-[500px] py-5 px-7 h-fit">
      <div className="flex justify-between items-center">
        <p className="text-[25px] font-bold">{title}</p>
        <span className="text-[25px]">
          <FaPlusCircle />
        </span>
      </div>
      <DefaultTasksList tasks={tasks} />
    </Container>
  );
}

export default DefaultTasks;