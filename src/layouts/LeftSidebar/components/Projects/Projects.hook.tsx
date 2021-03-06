import Swal from 'sweetalert2'; 

import ProjectActions from '@services/actions/projects';
import { useAppDispatch, useAppSelector } from "@services/store";
import { setProjects } from '@services/reducers/projects';
import { setProjectId } from '@services/reducers/tasks';

const useProjects = () => {
  const [ projects ] = useAppSelector(state => [ state.projects ]);
  const dispatch = useAppDispatch();
  
  const createProject = async (project) => {
    const { status, data } = await ProjectActions.create(project);
    if (status !== 201) return;
    dispatch(setProjects([ ...projects.data, data.createdProject ]));
  }

  const deleteProject = async (projectId: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const { data, status } = await ProjectActions.deleteProject(projectId);
          if (data !== 'OK' || status !== 200) return;
          dispatch(setProjects(projects.data.filter(project => project.id !== projectId)));
          dispatch(setProjectId(null));
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } catch(error) {
          console.log('DeleteProjectError', error);
        }
      }
    })
  }

  return {
    createProject,
    deleteProject,
  }
}

export default useProjects;