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
  const [data,setData]=useState('');
  const tasks = [
    { task: 'first todo item', state: 'pending' }, 
    { task: 'second todo item', state: 'in progress' }, 
    { task: 'second todo item', state: 'completed' }];
  return (
    <Container>
      
      <TextField
        label="Name"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" color="primary">
                add to todo list
              </Button>
            </InputAdornment>
          ),
        }}
      />
      
      <List dense>

        {tasks.map((item ,index)=> {
          if(item.state==='pending'){
  
            return <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary={item.task} primaryTypographyProps={{color:'green'}} />
            </ListItem>;
          }else if(item.state==='in progress'){
            return <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary={item.task} primaryTypographyProps={{color:'blue'}} />
            </ListItem>;
          } else {
            return <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary={item.task} style={{textDecoration:'line-Through'}} />
              <ListItemIcon>
                <CheckBoxIcon/>
              </ListItemIcon>
            </ListItem>;
          }})}
      </List>
    </Container>
  );
}

export default App;
