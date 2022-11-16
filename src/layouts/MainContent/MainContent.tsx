import React from 'react';
import { useAppSelector } from '@services/store';

import Container from '@common/Container';
import Tasks from './components/Tasks';

const MainContent: React.FC = () => {
  const [
    tasks,
    projects,
  ] = useAppSelector(state => [
    state.tasks,
    state.projects,
  ]);

  const currentProject = projects.data.find(p => p.id === tasks.projectId);

  return (
    <div className="flex-1 overflow-y-auto pb-10">
      <p className="text-[30px] font-bold text-center my-10">
        {currentProject && currentProject.name || 'No project title'}
      </p>
      <div>
        {tasks.projectId ? (
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