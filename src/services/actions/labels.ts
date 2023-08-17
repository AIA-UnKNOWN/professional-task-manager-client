import axios from "axios";

const getAll = async (): Promise<void> => {
  try {
    const response = await axios.get(`${process.env.API_URL}/labels`);
    return response.data;
  } catch (error) {
    console.log("GetAllProjectsError", error);
  }
};

const create = async (label): Promise<any> => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/label/create`,
      label
    );
    return response;
  } catch (error) {
    console.log("CreateProjectError", error);
  }
};

const deleteLabel = async (labelId: number): Promise<any> => {
  try {
    const response = await axios.delete(
      `${process.env.API_URL}/label/${labelId}/delete`
    );
    return response;
  } catch (error) {
    console.log("DeleteProjectError", error);
  }
};

const getAllSample = async (): Promise<Array<{ id: number; name: string }>> => {
  return [
    { id: 1, name: "Label 1" },
    { id: 2, name: "Label 2" },
    { id: 3, name: "Label 3" },
  ];
};

export default {
  getAll,
  getAllSample,
  create,
  deleteLabel,
};
