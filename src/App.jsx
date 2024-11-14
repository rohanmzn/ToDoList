import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles.css";
import { useEffect, useState } from "react";
import { NewTodoForm } from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  // Initialize state by loading the todos from localStorage (if any)
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("ITEMS");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Update localStorage whenever 'todos' changes
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]); // This hook runs when 'todos' changes

  // Add a new todo item
  function addTodo(title) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  // Toggle the completion status of a todo item
  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Delete a todo item
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To-Do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
