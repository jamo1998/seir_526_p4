import React from 'react';
import { NewTodoInput } from './NewTodoInput';
import { useSelector, useDispatch } from 'react-redux';
import { TodoState } from './todoReducer';

function App() {
  const todos = useSelector<TodoState, TodoState["todos"]>((state) => state.todos)
  const dispatch = useDispatch()

  const addTodo = (todo:string) => {
    dispatch({ type: "ADD_TODO", payload: todo })
  }

  return (
    <>
      {/* <div>
          <button onClick={this.onGetTodos}>Get Todos</button>
          { this.renderTodoList()}
        </div> */}
        <div className="center container">
          <NewTodoInput addTodo={addTodo} />
          <ul>
            {todos.map((todo) => {
              return <li key={todo}>{todo}</li>
            })}
          </ul>
        </div>
    </>
  );
}

export default App;
