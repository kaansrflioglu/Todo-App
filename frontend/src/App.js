import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React, { useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []); 

  return (
    <div className="App">
      <header>
        <h1>Yapılacaklar Listesi</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
