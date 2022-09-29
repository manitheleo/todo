import "./App.css";
import {
  TextField,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  InputAdornment,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

function App() {
  return (
    <Container>
      <TextField
        labl="Name"
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
        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Single-line item" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Single-line item" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Single-line item" />
        </ListItem>
      </List>
    </Container>
  );
}

export default App;
