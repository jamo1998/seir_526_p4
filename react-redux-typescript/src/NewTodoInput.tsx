import React, { ChangeEvent } from 'react';

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
    <h1>What Next</h1>
    <input onChange={updateTodo} value={todo} type="text" name="todo" placeholder="Todo" />
    <br />
    <br />
    <button onClick={onAddTodo} className="btn green">Add Todo</button>
  </div>
  )
};