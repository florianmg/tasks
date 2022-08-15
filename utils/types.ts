import * as SQLite from "expo-sqlite";
// DatabaseManager.ts

export interface ITask {
  categoryId: number;
  content: string;
  status: number;
  position: number;
}

export interface IDBTask extends ITask {
  id: number;
}

export interface IRequest {
  isError: boolean;
  result?: SQLite.SQLResultSet;
  error?: SQLite.SQLError;
}

export interface IInsertTaskRequest extends IRequest {
  newTask?: ITask;
}
