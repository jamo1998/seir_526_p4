import React from 'react';
import { NewTodoInput } from './NewTodoInput';
import { useSelector, useDispatch } from 'react-redux';
import { TodoState } from './todoReducer';
import { addTodo } from './actions';
import './App.css'

function App() {
  const todos = useSelector<TodoState, TodoState["todos"]>((state) => state.todos)
  const dispatch = useDispatch()

  const onAddTodo = (todo:string) => {
    dispatch(addTodo(todo))
  }

  return (
    <>
      {/* <div>
          <button onClick={this.onGetTodos}>Get Todos</button>
          { this.renderTodoList()}
        </div> */}
        <div className="center container">
          <NewTodoInput addTodo={onAddTodo} />
          <ul>
            {todos.map((todo, index) => {
              return <li className="todo" key={todo}>{index+1}. {todo}</li>
            })}
          </ul>
        </div>
    </>
  );
}

export default App;
