export interface TaskList {
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  create?: Date;
}

export enum TaskStatus {
  Uncompleted,
  Completed,
  putOff
}

export enum TaskPriority {
  Important,
  Unimportant,
  Idea
}
