import React, { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {
//   const { isLoading, data: todos = [] } = useGetTodosQuery();
const [todoId, setTodoId] = useState(1)
  const { isLoading, data: todo } = useGetTodoQuery(todoId);


  const prevTodo = () => {
    if(todoId === 1) return;
    setTodoId(todoId - 1)
  }

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }

  return (
    <>
      <h1>Todos - RTK query</h1>

      <hr />

      <h4>is loading.... { isLoading ? 'true' : 'false' } </h4>
      <pre> {JSON.stringify(todo)} </pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}><strong>{todo.completed ? 'Done ' : 'Pending '}</strong>{todo.title}</li>
        ))}
      </ul> */}
      <button onClick={prevTodo}> prev todo</button>
      <button onClick={nextTodo}> next todo</button>
    </>
  );
};
