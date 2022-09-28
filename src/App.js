
import './App.css';
import {TextField,Container,List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';


function App() {
 
  return (
   
       
       
       <Container>
        <List dense>
        <TextField  variant="outlined" size="small" label='Name'>max</TextField>
                <ListItem >
                    <ListItemIcon><FolderIcon /></ListItemIcon>
                    <ListItemText primary="Single-line item"/>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                     </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Single-line item"/>
                 
                  
                </ListItem>
                </List>
          
               
                </Container>
               
               
  );
}

export default App;
