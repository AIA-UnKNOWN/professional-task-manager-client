import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import ActionDropdown from '@common/ui/ActionDropdown';
import useProjects from './Projects.hook';
import ProjectsList from './components/ProjectsList';
import AddProjectField from './components/AddProjectField';

const Projects: React.FC = () => {
  useProjects();

  return (
    <div>
      <div className="flex text-[25px] justify-between items-center">
        <span className="font-bold">Projects</span>
        <ActionDropdown
          displayedContentComponent={<FaPlusCircle />}
          dropdownComponent={(
            <AddProjectField
              onAddProject={projectName => alert('Add project ' + projectName)}
            />
          )}
        />
      </div>
      <ProjectsList />
    </div>
  );
}

export default Projects;