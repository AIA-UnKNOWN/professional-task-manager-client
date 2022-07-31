import ProjectActions from '@services/actions/projects';
import { useAppDispatch, useAppSelector } from "@services/store";
import { setProjects } from '@services/reducers/projects';

const useProjects = () => {
  const [ projects ] = useAppSelector(state => [ state.projects ]);
  const dispatch = useAppDispatch();
  
  const createProject = async (project) => {
    const { status, data } = await ProjectActions.create(project);
    if (status !== 201) return;
    dispatch(setProjects([ ...projects.data, data.createdProject ]));
  }

  return {
    createProject,
  }
}

export default useProjects;