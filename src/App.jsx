import { useState } from 'react';

import Todo from './components/Todo/Todo';
import TodoForm from "./components/Todo/TodoForm";
import "./App.css";

function App() {

  const [todos, setTodos] = useState([
    { id: 1, text: "Ir para academia", category: "Pessoal", isCompleted: false },
    { id: 2, text: "Revisar as tarefas", category: "Trabalho", isCompleted: false },
   
  ])

  const addTodo = (text,category) => {
    const newTodos = [...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted:false,
      },
    ];
    setTodos(newTodos)
  }

const removeTodo = (id) =>{
  const newTodos = [...todos];
  const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
  setTodos(filteredTodos) 
}

const completeTodo = (id) => {
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
  setTodos(newTodos);
};

const editTodo = (id, newText, newCategory) => {
  const newTodos = todos.map(todo =>
    todo.id === id ? { ...todo, text: newText, category: newCategory } : todo
  );
  setTodos(newTodos);
};

  return (
    <div className='app'>
          <h1>Lista de Tarefas</h1>
          <div className='todo-list'>
              {todos.map((todo)=>(
             
             <Todo key={todo.id} 
                  todo={todo} 
                  removeTodo={removeTodo} 
                  completeTodo={completeTodo} 
                  editTodo={editTodo}/> 
              
              ))}

          </div>
          <TodoForm addTodo={addTodo}/>
    </div>

  )
}

export default App
