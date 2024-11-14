import React from "react";
import TodoItem from "../components/TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && (
        <li className="empty-message">Add one to get started.</li>
      )}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
