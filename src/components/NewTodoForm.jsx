import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [alertMessage, setAlertMessage] = useState(""); // State to hold the alert message

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");

    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>

      {/* Show alert if there's a message */}
      {alertMessage && (
        <div className="alert alert-success">{alertMessage}</div>
      )}
    </div>
  );
}
