import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import EditButton from "./Buttons/EditButton";
import DeleteButton from "./Buttons/DeleteButton";
const Listitem = (props) => {
  if (props.item.state === "completed") {
    return (
      <ListItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText
          primary={props.itemTask}
          style={{ textDecoration: "line-Through" }}
        />
        <EditButton handleEditClick={props.handleEditClick} item={props.item} />
        <DeleteButton
          handleDeleteItem={props.handleDeleteItem}
          index={props.index}
        />
      </ListItem>
    );
  } else {
    return (
      <ListItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText
          primary={props.itemTask}
          primaryTypographyProps={{ color: props.itemColor }}
        />
        <EditButton handleEditClick={props.handleEditClick} item={props.item} />
        <DeleteButton
          handleDeleteItem={props.handleDeleteItem}
          index={props.index}
        />
      </ListItem>
    );
  }
};
export default Listitem;
