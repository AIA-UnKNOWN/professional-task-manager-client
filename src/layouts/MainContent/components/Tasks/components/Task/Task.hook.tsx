import { useState } from 'react';
import Swal from 'sweetalert2';
import { useAppSelector, useAppDispatch } from '@services/store';

import { TaskProps, TaskInterface } from './Task';
import TaskActions from '@services/actions/tasks';
import { setTasks } from '@services/reducers/tasks';
import { setProjects } from '@services/reducers/projects';

const useTask = (props: TaskProps) => {
  const [
    tasks,
    projects,
  ] = useAppSelector(state => [
    state.tasks,
    state.projects,
  ]);
  const dispatch = useAppDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [saveButtonText, setSaveButtonText] = useState('Save');
  const [task, setTask] = useState(props.data);

  const onChangeHandler: (type: string, value: any) => void = (type, value) => {
    setSaveButtonText('Save');
    switch(type) {
      case 'title':
        return setTask({ ...task, title: value });
      case 'description':
        return setTask({ ...task, description: value });
      case 'is_completed':
        return setTask({ ...task, is_completed: value });
    }
  };

  const onSaveTask = async (): Promise<void> => {
    setSaveButtonText('Saving...');
    try {
      const response = await TaskActions.update(task.id, task);
      if (response.data !== "OK") return;
      setSaveButtonText('Saved!');
      updateProjectsRedux(task);
      setTimeout(() => {
        setIsEditMode(!isEditMode);
      }, 200);
    } catch(error) {
      console.log('onSaveTaskError', error);
    }
  }

  const onChangeTaskStatus = async (): Promise<void> => {
    const updatedTask = { ...task, is_completed: !task.is_completed };
    setTask(updatedTask);
    try {
      const response = await TaskActions.update(updatedTask.id, updatedTask);
      if (response.data !== "OK") return;
      updateTasksRedux(
        updatedTask.id,
        updatedTask,
      );
    } catch(error) {
      console.log('onSaveTaskError', error);
    }
  }

  const updateTasksRedux = (id: number, updatedTask: TaskInterface, type: string = "update"): void => {
    switch(type) {
      case 'update':
        tasks.data && tasks.data.length > 0 &&
          dispatch(
            setTasks(tasks.data.map(task => {
              return parseInt(task.id) !== id ?
                task :
                updatedTask;
            }))
          );
          dispatch(
            setProjects(projects.data.map(project => {
              if (project.id !== updatedTask.project_id) return project;
              return {
                ...project,
                tasks: project.tasks.map(task => {
                  if (task.id !== updatedTask.id) return task;
                  return updatedTask;
                })
              };
            }))
          );
        break;
      case 'delete':
        tasks.data && tasks.data.length > 0 &&
          dispatch(
            setTasks(tasks.data.filter(task => parseInt(task.id) !== id))
          );
          dispatch(
            setProjects(projects.data.map(project => {
              if (updatedTask.project_id !== project.id) return project;
              return {
                ...project,
                tasks: project.tasks.filter(task => updatedTask.id !== task.id),
              };
            }))
          );
        break;  
    }
  }

  const deleteTask = async (): Promise<void> => {
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
          const response = await TaskActions.deleteTask(task.id);
          if (response.data !== "OK") return;
          updateTasksRedux(task.id, task, 'delete');
          Swal.fire(
            'Deleted!',
            'Task has been deleted.',
            'success'
          )
        } catch(error) {
          console.log('DeleteTaskError', error);
        }
      }
    })
  }

  const updateProjectsRedux = (task) => {
    dispatch(setProjects(projects.data.map(project => {
      if (task.project_id !== project.id) return project;
      return {
        ...project,
        tasks: project.tasks.map(projectTask => {
          if (projectTask.id !== task.id) return projectTask;
          return task;
        }),
      }
    })));
  }

  return {
    isEditMode, setIsEditMode,
    saveButtonText,
    task, onChangeHandler,
    onSaveTask,
    onChangeTaskStatus,
    deleteTask,
  }
}

export default useTask;