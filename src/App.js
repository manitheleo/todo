
import './App.css';
import { Container,List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';

function App() {
  return (
    <Container>
           
              <List dense>
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
