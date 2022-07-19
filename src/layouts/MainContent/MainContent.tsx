import React from 'react';
import { useAppSelector } from '@services/store';

import Tasks from './components/Tasks';

const MainContent: React.FC = () => {
  const projectId = useAppSelector(state => state.tasks.projectId);

  return (
    <div className="flex-1">
      <p className="text-[30px] font-bold text-center my-10">
        Project Title
      </p>
      <div>
        {projectId && <Tasks />}
      </div>
    </div>
  );
}

export default MainContent;