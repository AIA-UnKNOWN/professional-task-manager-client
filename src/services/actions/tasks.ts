import axios from 'axios';

import env from '@env.js';

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

export default {
  getAll,
  getAllSample
}