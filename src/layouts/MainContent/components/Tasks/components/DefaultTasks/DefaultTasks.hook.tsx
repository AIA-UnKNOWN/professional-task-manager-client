import { useAppSelector, useAppDispatch } from "@services/store";

import TaskActions from "@services/actions/tasks";
import { setTasks } from "@services/reducers/tasks";
import { TaskInterface } from "@layouts/MainContent/components/Tasks/components/Task";

const useDefaultTasks = () => {
  const [ tasks ] = useAppSelector(state => [ state.tasks ]);
  const dispatch = useAppDispatch();

  const createTask = async (): Promise<void> => {
    try {
      const response = await TaskActions.create(tasks.projectId);
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
  }

  return {
    createTask,
  }
}

export default useDefaultTasks;