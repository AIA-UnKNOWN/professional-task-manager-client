import axios from "axios";

const getAll = async (): Promise<void> => {
  try {
    const response = await axios.get(`${process.env.API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.log("GetAllProjectsError", error);
  }
};

const getAllSample = async (): Promise<Array<{ id: number; name: string }>> => {
  return [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
  ];
};

const create = async (project): Promise<any> => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/project/create`,
      project
    );
    return response;
  } catch (error) {
    console.log("CreateProjectError", error);
  }
};

const deleteProject = async (projectId: number): Promise<any> => {
  try {
    const response = await axios.delete(
      `${process.env.API_URL}/project/${projectId}/delete`
    );
    return response;
  } catch (error) {
    console.log("DeleteProjectError", error);
  }
};

export default {
  getAll,
  getAllSample,
  create,
  deleteProject,
};
