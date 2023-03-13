import { useAppDispatch, useAppSelector } from '@services/store';

import TaskActions from '@services/actions/tasks';
import { setTasks } from '@services/reducers/tasks';
import { setLabels } from '@services/reducers/labels';
import { setProjects } from '@services/reducers/projects';

const useTaskEdit = () => {
  const dispatch = useAppDispatch();
  const [
    tasks,
    projects,
    labels,
  ] = useAppSelector(state => [
    state.tasks,
    state.projects,
    state.labels,
  ]);

  const setTaskLabelByLabelId = async (labelId, task) => {
    const { status } = await TaskActions.update(task.id, { ...task, label_id: labelId });
    if (status !== 200) return;
    updateReduxTasks({ labelId }, task);
    updateReduxLabels(labelId, task);
  }

  const setTaskProjectByProjectId = async (projectId, task) => {
    const { status } = await TaskActions.update(task.id, { ...task, project_id: projectId });
    if (status !== 200) return;
    updateReduxTasks({ projectId }, task);
    updateReduxProjects(projectId, task);
  } 

  const updateReduxTasks = (updatedTask, task) => {
    dispatch(setTasks(tasks.data.map(reduxTask => {
      if (reduxTask.id !== task.id) return reduxTask;
      return {
        ...reduxTask,
        label_id: updatedTask.labelId || reduxTask.label_id,
        project_id: updatedTask.projectId || reduxTask.project_id,
      }
    })));
  }

  const updateReduxLabels = (labelId, task) => {
    task = tasks.data.find(t => t.id === task.id);
    // Removes the task from previous label
    let updatedLabels = labels.data.map(label => {
      if (label.id !== task.label_id) return label;
      return {
        ...label,
        tasks: label.tasks.filter(labelTask => labelTask.id !== task.id),
      }
    });
    // Adds the task to the new assigned label
    updatedLabels = updatedLabels.map(label => {
      if (label.id !== labelId) return label;
      const labelTaskIndex = label.tasks.findIndex(labelTask => labelTask.id === task.id);
      return {
        ...label,
        tasks: labelTaskIndex === -1 ? [...label.tasks, task] : label.tasks,
      }
    });
    dispatch(setLabels(updatedLabels));
  }

  const updateReduxProjects = (projectId, task) => {
    task = tasks.data.find(t => t.id === task.id);
    let updatedProjects = projects.data.map(project => {
      if (project.id !== task.project_id) return project;
      return {
        ...project,
        tasks: project.tasks.filter(projectTask => projectTask.id !== task.id),
      }
    });
    updatedProjects = updatedProjects.map(project => {
      if (project.id !== projectId) return project;
      const projectTaskIndex = project.tasks.findIndex(projectTask => projectTask.id === task.id);
      return {
        ...project,
        tasks: projectTaskIndex === -1 ? [...project.tasks, task] : project.tasks,
      }
    });
    dispatch(setProjects(updatedProjects));
  }

  return {
    // Functions
    setTaskLabelByLabelId,
    setTaskProjectByProjectId,
  }
}

export default useTaskEdit;