import React from 'react';

import Tasks from './components/Tasks';

const MainContent: React.FC = () => {
  return (
    <div className="flex-1">
      <p className="text-[30px] font-bold text-center">
        Project Title
      </p>
      <div>
        <Tasks />
      </div>
    </div>
  );
}

export default MainContent;