import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "@services/store";

import ProjectsActions from '@services/actions/projects';
import { setProjects } from '@services/reducers/projects';
import { setProjectId } from '@services/reducers/tasks';
import { setTasks } from '@services/reducers/tasks';
import { setNavigationId } from '@services/reducers/navigation';
import navigationCategories from '@constants/navigation-categories';

const useProjectsList = () => {
  const [
    projects,
    navigation,
  ] = useAppSelector(state => [
    state.projects.data,
    state.navigation,
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

  const setNavigationById = (id: number) => {
    dispatch(setNavigationId({ id, categoryName: navigationCategories.PROJECT }));
  }

  return {
    // states
    projects,
    navigation,
    // functions
    selectProjectById,
    // reducers
    setNavigationById,
  }
}

export default useProjectsList;