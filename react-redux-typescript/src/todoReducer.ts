import { Action, ActionTypes } from './actions'
import './App.css'

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
    case ActionTypes.deleteTodo: {
      return {...state, todos: [...state.todos.filter((todo, index:number) => index !== action.payload)]}
    }
    default:
      return state
  }
}