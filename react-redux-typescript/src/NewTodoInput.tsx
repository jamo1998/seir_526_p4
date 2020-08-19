import React, { ChangeEvent } from 'react';
import './App.css'

interface NewTodoInputProps {
  addTodo(todo:string): void;
}

export const NewTodoInput:React.FC<NewTodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState("")

  const updateTodo = (e:ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const onAddTodo = () => {
    addTodo(todo);
    setTodo("");
  }

  return (
    <div>
    <input onChange={updateTodo} value={todo} type="text" name="todo" placeholder="Todo" />
    <br />
    <br />
    <button onClick={onAddTodo} type="submit" className="btn green">Add Todo</button>
  </div>
  )
};