
import './App.css';
import { Container } from '@mui/system';
import { TextField, Typography } from '@mui/material';
import { useState } from 'react';

function App() {
  const[data,setData]=useState('')
  return (
    <>
    <center>
    <Typography variant='h2'>Todo</Typography>
    <Container>
      <TextField type="text" style={{"width":"500px","margin":"5px"}} label="Name" variant="outlined" onChange={(e)=>setData(e.target.value)}></TextField>
    </Container>
    {data}
    </center>
    </>
      
  );
}

export default App;
