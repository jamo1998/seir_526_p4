import { Action, ActionTypes } from './actions'

export interface TodoState {
  todos: string[]
}

const initialState = {
  todos: []
}

export const todoReducer = (state:TodoState = initialState, action: Action) => {
  switch(action.type) {
    case ActionTypes.addTodo: {
      return {...state, todos: [...state.todos, action.payload]}
    }
    default:
      return state
  }
}