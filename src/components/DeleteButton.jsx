import React from "react";

const DeleteButton = ({ id, deleteTodo }) => {
  return (
    <button
      className="btn btn-danger"
      onClick={(e) => {
        e.stopPropagation();
        deleteTodo(id);
      }}
      style={{ fontSize: "20px", lineHeight: "0" }}
    >
      ×
    </button>
  );
};

export default DeleteButton;
