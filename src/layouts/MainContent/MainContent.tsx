import React from 'react';
import { useAppSelector } from '@services/store';

import Container from '@common/Container';
import Tasks from './components/Tasks';

const MainContent: React.FC = () => {
  const projectId = useAppSelector(state => state.tasks.projectId);

  return (
    <div className="flex-1">
      <p className="text-[30px] font-bold text-center my-10">
        Project Title
      </p>
      <div>
        {projectId ? (
          <Tasks />
        ) : (
          <Container className="bg-light-gray-2 h-[200px] flex
          justify-center items-center mx-5">
            <p>No project selected</p>
          </Container>
        )}
      </div>
    </div>
  );
}

export default MainContent;