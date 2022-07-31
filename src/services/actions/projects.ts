import axios from 'axios';

import env from '@env.js';

const getAll = async (): Promise<void> => {
  try {
    const response = await axios.get(`${env.api.url}/projects`);
    return response.data;
  } catch(error) {
    console.log('GetAllProjectsError', error);
  }
}

const getAllSample = async (): Promise<Array<{ id: number, name: string }>> => {
  return [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
  ]
}

const create = async (project): Promise<any> => {
  try {
    const response = await axios.post(`${env.api.url}/project/create`, project);
    return response;
  } catch(error) {
    console.log('CreateProjectError', error);
  }
}

export default {
  getAll,
  getAllSample,
  create,
}