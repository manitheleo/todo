import './App.css';
import {Container} from '@mui/material';

import { useState } from 'react';
import EditForm from './Components/Forms/EditForm';
import Form from './Components/Forms/Form';
import ListsItem from './Components/ListsItem';


function App() {
  const defaultTasks = [
    { task: 'first todo item', state: 'pending', id:'1' }, 
    { task: 'second todo item', state: 'in progress', id:'2' }, 
    { task: 'second todo item', state: 'completed', id:'3' }
  ];
  const [tasks,setTasks]=useState(defaultTasks);
  const [todo,setTodo]=useState('');
  const [edit,setEdit]=useState(false);
  const [currentTodo,setCurrentTodo]=useState({})
  const handleInputChange = (e) => {
    setTodo(e.target.value)
  }
  const handleEditInput = (e) => {
    setCurrentTodo({...currentTodo, task : e.target.value})
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { id: tasks.length+1, task:todo}])
    setTodo('')
  }
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, { ...currentTodo })
  }
  const handleUpdateTodo = (id, updateTodo) => {
    const updateItem=tasks.map((todo,index) => {
      return todo.id===id ? updateTodo : todo
    })
    setEdit(false);
    setTasks(updateItem);
  }
  const handleEditClick = (todo, index) => {
    setEdit(true);
    setCurrentTodo({ ...todo });
  }
  const deleter = (value) => {
    const del = tasks.filter((fine, index) => index!==value);
    setTasks(del);
  };
  return (
  <Container>
    {edit ? (
    <EditForm
    handleEditFormSubmit={handleEditFormSubmit} 
    setEdit={setEdit} 
    currentTodo={currentTodo} 
    handleEditInput={handleEditInput}
    />
    )
    :
    (
    <Form
    handleFormSubmit={handleFormSubmit} 
    todo={todo} 
    handleInputChange={handleInputChange}
    />
    )
    }
    <ListsItem
    tasks={tasks}
    handleEditClick={handleEditClick}
    deleter={deleter}
    />
    </Container>
  );
}

export default App;
