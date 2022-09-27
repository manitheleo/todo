
import './App.css';
import { List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';

function App() {
  return (
    
           
              <List>
                <ListItem>
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
                    <ListItemText primary="single-line item"/>
                 
                  
                </ListItem>
                </List>
          
         
       
  );
}

export default App;
