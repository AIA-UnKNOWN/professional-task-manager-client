import './ProjectsList.css';
import React from 'react';
import { useAppSelector } from '@services/store';

import useProjectsList from './ProjectsList.hook';
import { ProjectsListInterface } from 'constants/interfaces';

const ProjectsList: React.FC<ProjectsListInterface> = ({
  onDeleteProject,
}) => {
  const {
    // states
    projects,
    navigation,
    // functions
    selectProjectById,
    // reducers
    setNavigationById,
  } = useProjectsList();

  if (projects && projects.length === 0) return (
    <div className='project mb-1 relative'>
      <div
        className={`
          rounded-[10px] text-[15px] w-[211px] h-[34px] flex justify-center
          items-center px-4 bg-light-gray
        `}
      >
          <span>No projects</span>
      </div>
    </div>
  );

  return (
    <div className="my-2">
      {projects.map(project => {
        const pendingTasksCount = project?.tasks?.filter(task => !task.is_completed)?.length || 0;
        return (
          <div
            key={project.id}
            className='project mb-1 last-of-type:mb-0 relative'
            onClick={() => setNavigationById(project.id)}
          >
            <div
              className={`
                rounded-[10px] text-[15px] w-[211px] h-[34px] flex justify-between
                items-center px-4 cursor-pointer hover:bg-light-gray-3
                ${project.id === navigation.id && navigation.categoryName === 'PROJECT'
                  ? 'bg-light-gray-3'
                  : 'bg-light-gray'}
              `}
              onClick={() => selectProjectById(project.id)}
            >
              <span>
                {project.name}
              </span>
              <span className="font-bold">
                {pendingTasksCount}
              </span>
            </div>
            <div
              className={`delete-button absolute top-[50%] left-[100%] -translate-y-[50%]`}
            >
              <button
                className='bg-red text-white px-2 py-1 rounded-md text-[14px] ml-2'
                onClick={() => onDeleteProject(project.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default ProjectsList;