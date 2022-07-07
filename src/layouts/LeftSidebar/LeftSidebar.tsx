import React from 'react';

import useLeftSidebar from './LeftSidebar.hook';
import Container from '@common/Container';
import Projects from './components/Projects';

const LeftSidebar: React.FC = () => {
  useLeftSidebar();

  return (
    <div className="bg-light-gray w-[300px] flex flex-col items-center py-5">
      <Container
        style={{
          width: 266,
          padding: 10,
          paddingLeft: 25,
          paddingRight: 25,
          backgroundColor: 'white'
        }}
      >
        <Projects />
      </Container>
    </div>
  );
}

export default LeftSidebar;