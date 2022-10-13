import './App.css';
import {
  TextField,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  InputAdornment,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';


function App() {

  const defaultTasks = [
    { task: 'first todo item', state: 'pending',id:'1' }, 
    { task: 'second todo item', state: 'in progress',id:'2' }, 
    { task: 'second todo item', state: 'completed',id:'3' }
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
    const handleUpdateTodo = (id, updateTodo)=>{
      const updateItem=tasks.map((todo,index)=>{
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
      <form onSubmit={handleEditFormSubmit}>
        <TextField
        label="Name"
        variant='outlined'
        value={currentTodo.task}
        onChange={handleEditInput}
        />
        <Button type="submit">Update</Button>
        <Button onClick={()=>setEdit(false)}>cancel</Button>
        </form>
        ) : (
        <form onSubmit={handleFormSubmit}>
          <TextField
          label="Name"
          variant="outlined"
          value={todo}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
            <InputAdornment position="end">
              <Button type="submit" variant="contained" color="primary">
                add to todo list
                </Button>
                </InputAdornment>
            )
          }}
        />
        </form>
      )}
      <List dense>
        {tasks.map((item, index) => {
          if(item.state === 'pending') {
            return (
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
              primary={item.task} 
              primaryTypographyProps={{color:'green'}} 
              />
              <Button onClick={()=>handleEditClick(item)}>edit</Button>
              <Button onClick={() => deleter(index)}>delete</Button>
            </ListItem>
            );
          } else if (item.state==='in progress') {
            return (
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText 
              primary={item.task}
              primaryTypographyProps={{color:'blue'}}
              />
              <Button onClick={() => handleEditClick(item)}>edit</Button>
              <Button onClick={() => deleter(index)}>delete</Button>
            </ListItem>
            )
          } else if(item.state==='completed') {
            return (
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
              primary={item.task}
              style={{textDecoration:'line-Through'}}
              />
              <ListItemIcon>
                <CheckBoxIcon/>
              </ListItemIcon>
              <Button>edit</Button><Button>delete</Button>
            </ListItem>
            )
          } else {
            return (
            <ListItem>
              <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={item.task} />
                <Button onClick={() => handleEditClick(item, index)}>
                  edit
                </Button>
                <Button onClick={() => deleter(index)}>delete</Button>
              </ListItem>
            );
          }
        })}
      </List>
    </Container>
  );
}

export default App;
