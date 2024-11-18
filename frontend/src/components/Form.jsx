import React from 'react'

function Form({ inputText, setInputText, todos, setTodos }) {
    const submitTodoHandler = (event) => {
        event.preventDefault();
    
        const newTodo = { text: inputText, completed: false };
    
        fetch("http://localhost:8080/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
        })
        .then((response) => response.json())
        .then((data) => {
            setTodos([...todos, data]);
            setInputText("");
        });
    };
    

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    }


    return (
        <form>
            <div className="input-area">
                    <input value={inputText} type="text" className="todo-input" placeholder="Ekle..." onChange={inputTextHandler} />
                    <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                        <i className="fas fa-plus-circle"></i>
                    </button>
            </div>
        </form>
    )
}

export default Form