import React from 'react';
import { NewTodoInput } from './NewTodoInput';
import { useSelector, useDispatch } from 'react-redux';
import { TodoState } from './todoReducer';
import { addTodo, deleteTodo } from './actions';
import './App.css'


function App() {
  const todos = useSelector<TodoState, TodoState["todos"]>((state) => state.todos)
  const dispatch = useDispatch()

  const onAddTodo = (todo:string) => {
    dispatch(addTodo(todo))
  }

  const onDeleteTodo = (index:number) => {
    dispatch(deleteTodo(index))
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
              return (
                <div>
                  <li className="todo" key={todo}>
                    {index+1}. {todo}
                    <button onClick={() => onDeleteTodo(index)} className="btn red white-text delete-btn">X</button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
    </>
  );
}

export default App;
