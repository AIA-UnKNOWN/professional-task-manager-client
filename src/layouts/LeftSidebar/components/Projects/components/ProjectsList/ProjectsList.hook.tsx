import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "@services/store";

import ProjectsActions from '@services/actions/projects';
import { setProjects } from '@services/reducers/projects';

const useProjectsList = () => {
  const [ projects ] = useAppSelector(state => [
    state.projects.data,
  ]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllProjects();
  }, []);
  
  const getAllProjects = async () => {
    const projects = await ProjectsActions.getAll();
    dispatch(setProjects(projects));
  }

  return {
    projects,
  }
}

export default useProjectsList;