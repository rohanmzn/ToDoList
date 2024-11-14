import React from "react";
import TodoItem from "./TodoItem";

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
            {...todo} // Spread the todo object to pass all properties (id, title, completed)
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
