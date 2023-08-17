import axios from "axios";

import { TaskInterface } from "@layouts/MainContent/components/Tasks/components/Task/Task";

const create = async ({
  projectId,
  labelId,
}: {
  projectId: number | null;
  labelId: number | null;
}): Promise<any> => {
  try {
    const response = await axios.post(`${process.env.API_URL}/task/create`, {
      project_id: projectId,
      label_id: labelId,
      title: "Untitled",
    });
    return response;
  } catch (error) {
    console.log("CreateTaskError", error);
  }
};

const update = async (id: number, updatedTask: TaskInterface): Promise<any> => {
  try {
    const response = await axios.put(
      `${process.env.API_URL}/task/${id}/update`,
      updatedTask
    );
    return response;
  } catch (error) {
    console.log("UpdateTaskError", error);
  }
};

const getAll = async (projectId: number): Promise<void> => {
  try {
    const response = await axios.get(`${process.env.API_URL}/tasks`, {
      params: { projectId },
    });
    return response.data;
  } catch (error) {
    console.log("GetAllTasksError", error);
  }
};

const getAllTasksByLabelId = async (labelId: number): Promise<void> => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/label/${labelId}/tasks`
    );
    return response.data;
  } catch (error) {
    console.log("GetAllTasksByLabelIdError", error);
  }
};

const getAllSample = async (): Promise<Array<{ id: number; name: string }>> => {
  return [
    { id: 1, name: "Label 1" },
    { id: 2, name: "Label 2" },
    { id: 3, name: "Label 3" },
  ];
};

const deleteTask = async (id: number): Promise<any> => {
  try {
    const response = await axios.delete(
      `${process.env.API_URL}/task/${id}/delete`
    );
    return response;
  } catch (error) {
    console.log("DeleteTaskError", error);
  }
};

export default {
  create,
  update,
  getAll,
  getAllTasksByLabelId,
  getAllSample,
  deleteTask,
};
