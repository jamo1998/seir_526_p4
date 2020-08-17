export interface TodoState {
  todos: string[]
}

const initialState = {
  todos: []
}

type Action = {type: "ADD_TODO", payload: string}

export const todoReducer = (state:TodoState = initialState, action: Action) => {
  switch(action.type) {
    case "ADD_TODO": {
      return {...state, todos: [...state.todos, action.payload]}
    }
    default:
      return state
  }
}