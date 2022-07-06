import React from 'react';

import useLeftSidebar from './LeftSidebar.hook';

const LeftSidebar: React.FC = () => {
  useLeftSidebar();

  return (
    <div>
      <h1>Left side bar</h1>
    </div>
  );
}

export default LeftSidebar;