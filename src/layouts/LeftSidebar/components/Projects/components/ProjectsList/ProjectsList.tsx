import React from 'react';

import useProjectsList from './ProjectsList.hook';

const ProjectsList: React.FC = () => {
  const {
    projects,
    selectedProjectId,
    selectProjectById,
  } = useProjectsList();

  if (projects && projects.length === 0) return null;

  return (
    <div className="my-2">
      {projects.map(project => (
        <div className={`${project.id === selectedProjectId ? 'bg-light-gray-3' : 'bg-light-gray'}
          rounded-[10px] text-[15px] w-[211px] h-[34px]
          flex justify-between items-center px-4 mb-1 cursor-pointer
          last-of-type:mb-0 hover:bg-light-gray-3 ${project.id === selectedProjectId &&`bg-light-gray-3`}`}
          key={project.id}
          onClick={() => selectProjectById(project.id)}
        >
          <span>
            {project.name}
          </span>
          <span className="font-bold">
            0
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;