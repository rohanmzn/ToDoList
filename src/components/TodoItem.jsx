// TodoItem.jsx
import React from "react";
import DeleteButton from "./DeleteButton";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li key={id} style={{ cursor: "pointer" }} onClick={() => toggleTodo(id)}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        {title}
      </label>
      <DeleteButton id={id} deleteTodo={deleteTodo} todoTitle={title} />{" "}
    </li>
  );
};

export default TodoItem;
