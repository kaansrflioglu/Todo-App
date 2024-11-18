import React from "react";
import { toast } from "react-toastify";

function Todo({ text, id, completed, todos, setTodos }) {
  const completeTodoHandler = () => {
    const confirmComplete = window.confirm(
      "Görevi tamamlamak istediğinizden emin misiniz?"
    );

    if (confirmComplete) {
      fetch(`http://localhost:8080/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: true }),
      })
        .then((response) => response.json())
        .then((updatedTodo) => {
          setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
          toast.success("İşlem tamamlandı!", {
            autoClose: 2000,
            style: { backgroundColor: "#5bc0de", color: "white" },
          });
        });
    } else {
      toast.error("İşlem iptal edildi!", {
        autoClose: 2000,
        style: { backgroundColor: "#f0ad4e", color: "white" },
      });
    }
  };

  return (
    <div className={`todo ${completed ? "completed" : ""}`}>
      <li className="todo-item">{text}</li>
      <button onClick={completeTodoHandler} className="complete-btn">
        <i className="fa fa-check-circle"></i>
      </button>
    </div>
  );
}

export default Todo;
