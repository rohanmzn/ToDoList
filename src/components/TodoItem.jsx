import React from "react";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li
      key={id}
      style={{ cursor: "pointer" }}
      onClick={() => toggleTodo(id)} // Toggle checkbox on li click
    >
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)} // Ensure it still toggles when checkbox is clicked
        />
        {title}
      </label>
      <button
        className="btn btn-danger"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering the li click event
          deleteTodo(id); // Delete the todo
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
