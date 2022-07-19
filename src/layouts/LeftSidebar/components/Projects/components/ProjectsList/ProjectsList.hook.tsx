import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "@services/store";

import ProjectsActions from '@services/actions/projects';
import { setProjects } from '@services/reducers/projects';
import { setProjectId } from '@services/reducers/tasks';

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
  }

  return {
    projects,
    selectedProjectId,
    selectProjectById,
  }
}

export default useProjectsList;