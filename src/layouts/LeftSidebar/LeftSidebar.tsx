import React from 'react';

import Container from '@common/Container';
import Projects from './components/Projects';
import Labels from './components/Labels';

const LeftSidebar: React.FC = () => {
  return (
    <div className="bg-light-gray w-[300px] flex flex-col items-center py-5">
      <Container className="bg-white w-[266px] py-[10px] px-[25px]">
        <Projects />
      </Container>
      <Container className="bg-white w-[266px] py-[10px] px-[25px] mt-5">
        <Labels />
      </Container>
    </div>
  );
}

export default LeftSidebar;