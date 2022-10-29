import axios from 'axios';

import env from '@env.js';

const getAll = async (): Promise<void> => {
  try {
    const response = await axios.get(`${env.api.url}/labels`);
    return response.data;
  } catch(error) {
    console.log('GetAllProjectsError', error);
  }
}

const create = async (label) : Promise<any> => {
  try {
    const response = await axios.post(`${env.api.url}/label/create`, label);
    return response;
  } catch(error) {
    console.log('CreateProjectError', error);
  }
}

const deleteLabel = async (labelId: number) : Promise<any> => {
  try {
    const response = await axios.delete(`${env.api.url}/label/${labelId}/delete`);
    return response;
  } catch(error) {
    console.log('DeleteProjectError', error);
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
  getAllSample,
  create,
  deleteLabel,
}