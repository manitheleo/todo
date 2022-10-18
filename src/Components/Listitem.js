import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import EditButton from "./Buttons/EditButton";
import DeleteButton from "./Buttons/DeleteButton";
const Listitem = ({ handleEditClick, item, handleDeleteItem, id }) => {
  const itemColor = item.state === "pending" ? "green" : "blue";
  const style =
    item.state === "completed"
      ? { textDecoration: "line-Through" }
      : { color: itemColor };

  return (
    <ListItem>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary={item.task} style={style} />
      <EditButton handleEditClick={handleEditClick} item={item} />
      <DeleteButton handleDeleteItem={handleDeleteItem} id={id} />
    </ListItem>
  );
};

export default Listitem;
