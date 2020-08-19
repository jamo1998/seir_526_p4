import React from 'react';
import { NewTodoInput } from './NewTodoInput';
import { useSelector, useDispatch } from 'react-redux';
import { TodoState } from './todoReducer';
import { addTodo, deleteTodo, fetchTodos } from './actions';
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

  const onFetchTodos = () => {
    dispatch(fetchTodos())
  }

  return (
    <>
        <div className="center container">
          <h1>What Next</h1>
          <div className="row">
            <div className="col s12 m5 left-div">
              <h4>Make your own agenda!</h4>
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

            <div className="col m2">

            </div>

            <div className="col s12 m5 left-div">
              <h4>Bored? Get Random Todos</h4>
              <button className="btn green white-text" onClick={() => onFetchTodos()}>Get Todos!</button>
              <br /><br />
              {/* {todos.map((todo, index) => {
                return (
                  <li className="todo" key={todo}>
                    {index+1}. {todo}
                    <button onClick={() => onDeleteTodo(index)} className="btn red white-text delete-btn">X</button>
                  </li>
                )
              })} */}
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
