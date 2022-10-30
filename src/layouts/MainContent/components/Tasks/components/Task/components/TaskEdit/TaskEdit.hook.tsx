import { useAppDispatch, useAppSelector } from '@services/store';

import TaskActions from '@services/actions/tasks';
import { setTasks } from '@services/reducers/tasks';

const useTaskEdit = () => {
  const dispatch = useAppDispatch();
  const [tasks] = useAppSelector(state => [state.tasks]);

  const setTaskLabelByLabelId = async (labelId, task) => {
    const { status } = await TaskActions.update(task.id, { ...task, label_id: labelId });
    if (status !== 200) return;
    dispatch(setTasks(tasks.data.map(reduxTask => {
      if (reduxTask.id !== task.id) return reduxTask;
      return { ...reduxTask, label_id: labelId }
    })));
  }

  return {
    // Functions
    setTaskLabelByLabelId,
  }
}

export default useTaskEdit;