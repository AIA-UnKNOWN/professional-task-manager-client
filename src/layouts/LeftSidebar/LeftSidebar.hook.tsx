import { useEffect } from 'react';
import { useAppDispatch } from '@services/store';

import ProjectsActions from '@services/actions/projects';
import { setProjects } from '@services/reducers/projects';

const useLeftSidebar = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () : Promise<void> => {
    try {
      const projects = await ProjectsActions.getAll();
      dispatch(setProjects(projects));
    } catch(error) {
      console.log('getAllProjectsError', error);
    }
  }
}

export default useLeftSidebar;