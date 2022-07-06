import React from 'react';

import LeftSidebar from '@layouts/LeftSidebar';
import MainContent from '@layouts/MainContent';

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <MainContent />
    </div>
  );
}

export default App;