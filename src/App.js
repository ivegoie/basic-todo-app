import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';

import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
   handleFilter()
   // eslint-disable-next-line
  }, [todos, status])

  const handleFilter = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false ))
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
    <img className='background' src='https://wallpaperaccess.com/full/1782498.jpg' alt='background' />
      <header>
        <h2>Basic Todo List</h2>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText} 
        setStatus={setStatus} 
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      <Footer />
    </div>
  );
}

export default App;
