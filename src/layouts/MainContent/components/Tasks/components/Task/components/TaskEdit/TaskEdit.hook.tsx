import { useAppDispatch, useAppSelector } from '@services/store';

import TaskActions from '@services/actions/tasks';
import { setTasks } from '@services/reducers/tasks';
import { setLabels } from '@services/reducers/labels';

const useTaskEdit = () => {
  const dispatch = useAppDispatch();
  const [
    tasks,
    labels,
  ] = useAppSelector(state => [
    state.tasks,
    state.labels,
  ]);

  const setTaskLabelByLabelId = async (labelId, task) => {
    const { status } = await TaskActions.update(task.id, { ...task, label_id: labelId });
    if (status !== 200) return;
    dispatch(setTasks(tasks.data.map(reduxTask => {
      if (reduxTask.id !== task.id) return reduxTask;
      return { ...reduxTask, label_id: labelId }
    })));
    dispatch(setLabels(labels.data.map(label => {
      if (label.id !== labelId) return label;
      const labelTaskIndex = label.tasks.findIndex(labelTask => labelTask.id === task.id);
      return {
        ...label,
        tasks: labelTaskIndex === -1 ?
          [...label.tasks, task]
          : label.tasks,
      }
    })));
  }

  return {
    // Functions
    setTaskLabelByLabelId,
  }
}

export default useTaskEdit;