import React from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import DeleteButton from "./DeleteButton";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(id);
  };

  return (
    <li key={id} style={{ cursor: "pointer" }} onClick={handleTodoClick}>
      <label>
        {/* Display check icon if completed */}
        {completed ? (
          <FaCheckCircle style={{ marginRight: "10px", color: "#8BC34A" }} />
        ) : (
          <FaRegCircle style={{ marginRight: "10px", color: "gray" }} />
        )}
        {title}
      </label>
      <DeleteButton id={id} deleteTodo={deleteTodo} todoTitle={title} />
    </li>
  );
};

export default TodoItem;
