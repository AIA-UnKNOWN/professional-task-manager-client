import { useAppSelector, useAppDispatch } from "@services/store";

import navigationCategories from '@constants/navigation-categories';
import TaskActions from "@services/actions/tasks";
import { setTasks } from "@services/reducers/tasks";
import { setProjects } from "@services/reducers/projects";
import { TaskInterface } from "@layouts/MainContent/components/Tasks/components/Task";

const useDefaultTasks = () => {
  const [
    tasks,
    projects,
    navigation,
  ] = useAppSelector(state => [
    state.tasks,
    state.projects,
    state.navigation,
  ]);
  const dispatch = useAppDispatch();

  const createTask = async (): Promise<void> => {
    try {
      const task = { projectId: null, labelId: null };
      switch(navigation.categoryName) {
        case "PROJECT":
          task.projectId = navigation.id;
          break;
        case "LABEL":
          task.labelId = navigation.id;
          break;
      }
      const response = await TaskActions.create(task);
      if (response.status !== 201 || response.statusText !== 'Created') return;
      const newlyCreatedTask = response.data;
      appendNewTaskToRedux(newlyCreatedTask);
    } catch(error) {
      console.log('CreateTaskError', error);
    }
  }

  const appendNewTaskToRedux = (newTask: TaskInterface): void => {
    const newTasks = [ newTask, ...tasks.data ];
    dispatch(setTasks(newTasks));
    const updatedProjects = projects.data.map(project => {
      if (project.id !== newTask.project_id) return project;
      return {
        ...project,
        tasks: [ newTask, ...project.tasks ]
      };
    });
    dispatch(setProjects(updatedProjects));
  }

  return {
    createTask,
  }
}

export default useDefaultTasks;