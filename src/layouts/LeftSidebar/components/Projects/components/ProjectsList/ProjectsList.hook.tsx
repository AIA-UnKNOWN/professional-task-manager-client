import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "@services/store";

import ProjectsActions from '@services/actions/projects';
import { setProjects } from '@services/reducers/projects';
import { setProjectId } from '@services/reducers/tasks';
import { setTasks } from '@services/reducers/tasks';

const useProjectsList = () => {
  const [
    projects,
    selectedProjectId,
  ] = useAppSelector(state => [
    state.projects.data,
    state.tasks.projectId,
  ]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllProjects();
  }, []);
  
  const getAllProjects = async () => {
    const projects = await ProjectsActions.getAll();
    dispatch(setProjects(projects));
  }

  const selectProjectById = (id: number) => {
    dispatch(setProjectId(id));
    const project = projects?.find(project => project.id === id) || null;
    dispatch(setTasks(project?.tasks || []));
  }

  return {
    projects,
    selectedProjectId,
    selectProjectById,
  }
}

export default useProjectsList;