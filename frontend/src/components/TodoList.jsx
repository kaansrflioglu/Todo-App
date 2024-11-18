import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos &&
          todos
            .filter((todo) => !todo.completed) 
            .map((todo) => (
              <Todo
                text={todo.text}
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
      </ul>
    </div>
  );
}

export default TodoList;
