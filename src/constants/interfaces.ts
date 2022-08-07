/**
 * Put your interfaces here
 */

export interface AddProjectFieldInterface {
  onAddProject(projectName: string): void;
}

export interface ProjectsListInterface {
  onDeleteProject(projectId: number): void;
}

export interface TaskInterface {
  id: number;
  is_completed: boolean;
  title: string;
  description: string;
}

export interface TaskProps {
  data: TaskInterface;
}

export interface TaskEditInterface {
  data: TaskInterface;
  onCancelTask: () => void;
  saveButtonText?: string;
  onSaveTask: () => void;
  onChangeHandler: (type: string, value: string) => void;
  onChangeTaskStatus(): void;
  onDeleteTask?(): void;
}

export interface TextAreaProps {
  task: TaskInterface;
  onChangeHandler: (type: string, value: string) => void;
}

export interface TaskModifierPanelInterface {
  saveButtonText?: string;
  onCancel: () => void;
  onSave: () => void;
}

export interface TaskActionsInterface {
  onDeleteTask?(): void;
}

export interface DefaultTasksInterface {
  title: string;
  tasks: Array<TaskInterface>;
}

export interface PendingTasksListInterface {
  tasks: Array<TaskInterface>;
}