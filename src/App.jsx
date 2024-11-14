import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles.css";
import { useEffect, useState } from "react";
import { NewTodoForm } from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("ITEMS");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success"); // success or danger for the types of alerts

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]); // Runs when 'todos' changes

  function addTodo(title) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
    setAlertMessage(`${title} added to list`); // Show success alert
    setAlertType("success"); // Green alert for adding
    setTimeout(() => {
      setAlertMessage(""); // Hide the alert after 3 seconds
    }, 3000);
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const deleteAll = () => {
    setTodos([]);
    setAlertMessage("All To-D os have been deleted");
    setAlertType("danger"); // Red alert for delete action
    setTimeout(() => {
      setAlertMessage(""); // Hide the alert after 3 seconds
    }, 3000);
  };

  return (
    <div className="container">
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To-Do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

      {/* "Delete All" Button */}
      {todos.length > 0 && (
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to delete all todos?")) {
              deleteAll();
            }
          }}
          className="btn btn-danger mt-3"
        >
          Delete All
        </button>
      )}

      {/* Alert for new todo or deletion */}
      {alertMessage && (
        <div
          className={`alert ${
            alertType === "success" ? "alert-success" : "alert-danger"
          }`}
        >
          {alertMessage}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
