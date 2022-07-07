import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import useProjects from './Projects.hook';
import ProjectsList from './components/ProjectsList';

const Projects: React.FC = () => {
  return (
    <div>
      <div className="flex text-[25px] justify-between items-center">
        <span className="font-bold">Projects</span>
        <FaPlusCircle />
      </div>
      <ProjectsList />
    </div>
  );
}

export default Projects;