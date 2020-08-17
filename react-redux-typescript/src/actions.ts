export enum ActionTypes {
  addTodo,
  deleteTodo
}

export interface AddTodoAction {
  type: ActionTypes.addTodo;
  payload: string;
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const addTodo = (todo:string):AddTodoAction => ({
  type: ActionTypes.addTodo,
  payload: todo
})

export const deleteTodo = (index:number):DeleteTodoAction => ({
  type: ActionTypes.deleteTodo,
  payload: index
})

export type Action = AddTodoAction | DeleteTodoAction