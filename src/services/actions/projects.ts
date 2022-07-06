import axios from 'axios';

const getAll = async (): Promise<void> => {
  try {
    const response = await axios.get('http://localhost:3000/projects');
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

export default {
  getAll,
  getAllSample
}