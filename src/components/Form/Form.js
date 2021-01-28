import React from 'react'
import { nanoid } from 'nanoid'

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    
    const handleInputText = (e) => {
        setInputText(e.target.value);
    };

    const handleTodoSubmit = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: inputText, completed: false, id: nanoid()}
        ]);
        setInputText("")
    }

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <div className='todo-form'>
                <input value={inputText} placeholder='Add a Todo!' onChange={handleInputText} type="text" className='todo-input' />
                <button onClick={handleTodoSubmit} className='todo-button' type ='submit'>
                    <i className='fas fa-plus-square'></i>
                </button>
            </div>
            
            <div className='select'>
                <select onChange={handleStatus} name="todos" className='filter-todo'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
