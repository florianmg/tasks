import * as SQLite from "expo-sqlite";
import { IRequest, IInsertTaskRequest, ITask } from "./types";

// Open database, create if doesn't exist
const db = SQLite.openDatabase("tasks.db");

export default class DatabaseManager {
  static initializeDatabase() {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists\
            tasks (\
              id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
              categoryId INTEGER NOT NULL,\
              status INTEGER,\
              content TEXT,\
              position INTEGER\
            );\
           create table if not exists\
              categories (\
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
                color TEXT,\
                name TEXT\
              );"
        );
      },
      (e) => {
        console.log("error@initializeDatabase: " + e);
      },
      () => {
        console.log("initializeDatabase OK");
      }
    );
  }

  static executeQuery(
    sql: string,
    params: any[]
  ): Promise<SQLite.SQLResultSet> {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          sql,
          params,
          (t: SQLite.SQLTransaction, result: SQLite.SQLResultSet) =>
            resolve(result),
          (t: SQLite.SQLTransaction, error: SQLite.SQLError) => {
            reject(error);
            return true;
          }
        );
      });
    });
  }

  static async insertTask(newTask: ITask): Promise<IInsertTaskRequest> {
    try {
      const result = await this.executeQuery(
        "insert into tasks (categoryId, status, content, position) values (?, ?, ?, ?)",
        [newTask.categoryId, newTask.status, newTask.content, newTask.position]
      );
      return {
        isError: false,
        result,
        newTask,
      };
    } catch (error: any) {
      return {
        isError: true,
        error,
      };
    }
  }

  static async getAlltasks(): Promise<IRequest> {
    try {
      const result = await this.executeQuery("select * from tasks", []);
      return {
        isError: false,
        result,
      };
    } catch (error: any) {
      return {
        isError: true,
        error,
      };
    }
  }

  static async getTasksByCategoryId(categoryId: number): Promise<IRequest> {
    try {
      const result = await this.executeQuery(
        "select * from tasks where categoryId = ?",
        [categoryId]
      );
      return {
        isError: false,
        result,
      };
    } catch (error: any) {
      return {
        isError: false,
        error,
      };
    }
  }

  static async deleteTaskById(taskId: number): Promise<IRequest> {
    try {
      const result = await this.executeQuery("delete tasks where id = ?", [
        taskId,
      ]);
      return {
        isError: false,
        result,
      };
    } catch (error: any) {
      return {
        isError: true,
        error,
      };
    }
  }

  static async deleteAllTasks(): Promise<IRequest> {
    try {
      const result = await this.executeQuery("delete from tasks", []);
      return {
        isError: false,
        result,
      };
    } catch (error: any) {
      return {
        isError: false,
        error,
      };
    }
  }
}
