import ProjectActions from '@services/actions/projects';
import { useAppDispatch, useAppSelector } from "@services/store";

const useProjects = () => {
  
  const createProject = async (project) => {
    const { status, data } = await ProjectActions.create(project);
    if (status !== 201) return;
    console.log(data)
  }

  return {
    createProject,
  }
}

export default useProjects;