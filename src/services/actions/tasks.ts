import axios from 'axios';

import env from '@env.js';
import { TaskInterface } from '@layouts/MainContent/components/Tasks/components/Task/Task';

const update = async (id: number, updatedTask: TaskInterface): Promise<any> => {
  try {
    const response = await axios.put(`${env.api.url}/task/${id}/update`, updatedTask);
    return response;
  } catch(error) {
    console.log('UpdateTaskError', error);
  }
}

const getAll = async (projectId: number): Promise<void> => {
  try {
    const response = await axios.get(`${env.api.url}/tasks`, {
      params: { projectId }
    });
    return response.data;
  } catch(error) {
    console.log('GetAllTasksError', error);
  }
}

const getAllSample = async (): Promise<Array<{ id: number, name: string }>> => {
  return [
    { id: 1, name: 'Label 1' },
    { id: 2, name: 'Label 2' },
    { id: 3, name: 'Label 3' },
  ]
}

const deleteTask = async (id: number): Promise<any> => {
  try {
    const response = await axios.delete(`${env.api.url}/task/${id}/delete`);
    return response;
  } catch(error) {
    console.log('DeleteTaskError', error);
  }
}

export default {
  update,
  getAll,
  getAllSample,
  deleteTask,
}