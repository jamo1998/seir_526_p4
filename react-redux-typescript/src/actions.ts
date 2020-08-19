import axios from 'axios'
import { Dispatch } from "redux";

export enum ActionTypes {
  addTodo,
  deleteTodo,
  fetchTodos
}

export interface AddTodoAction {
  type: ActionTypes.addTodo;
  payload: string;
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: []
}

const url = 'http://jsonplaceholder.typicode.com/todos/';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);
    console.log(response.data)

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    })
  }
}

export const addTodo = (todo:string):AddTodoAction => ({
  type: ActionTypes.addTodo,
  payload: todo
})

export const deleteTodo = (index:number):DeleteTodoAction => ({
  type: ActionTypes.deleteTodo,
  payload: index
})

export type Action = AddTodoAction | DeleteTodoAction | FetchTodosAction