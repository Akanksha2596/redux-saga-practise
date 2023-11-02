import {
  markCompleteAction,
  markIncompleteAction,
  deleteTodoAction,
  createTodoAction,
  getTodos,
} from "./actionTypes";
export type markCompleteActionCreator = (id: string) => markCompleteAction;
export type markIncompleteActionCreator = (id: string) => markIncompleteAction;
export type deleteTodoActionCreator = (id: string) => deleteTodoAction;
export type createTodoActionCreator = (id: string) => createTodoAction;
export type getTodosActionCreator = () => getTodos;
