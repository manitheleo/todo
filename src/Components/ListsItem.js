import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EditButton from "./Buttons/EditButton";
import DeleteButton from "./Buttons/DeleteButton";
const ListsItem = (props) => {
  return (
    <>
      <List dense>
        {props.tasks.map((item, index) => {
          if (item.state === "pending") {
            return (
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText
                  primary={item.task}
                  primaryTypographyProps={{ color: "green" }}
                />
                <EditButton
                  handleEditClick={props.handleEditClick}
                  item={item}
                />
                <DeleteButton
                  handleDeleteItem={props.handleDeleteItem}
                  index={index}
                />
              </ListItem>
            );
          } else if (item.state === "in progress") {
            return (
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText
                  primary={item.task}
                  primaryTypographyProps={{ color: "blue" }}
                />
                <EditButton
                  handleEditClick={props.handleEditClick}
                  item={item}
                />
                <DeleteButton
                  handleDeleteItem={props.handleDeleteItem}
                  index={index}
                />
              </ListItem>
            );
          } else if (item.state === "completed") {
            return (
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText
                  primary={item.task}
                  style={{ textDecoration: "line-Through" }}
                />
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <EditButton
                  handleEditClick={props.handleEditClick}
                  item={item}
                />
                <DeleteButton
                  handleDeleteItem={props.handleDeleteItem}
                  index={index}
                />
              </ListItem>
            );
          } else {
            return (
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={item.task} />
                <EditButton
                  handleEditClick={props.handleEditClick}
                  item={item}
                />
                <DeleteButton
                  handleDeleteItem={props.handleDeleteItem}
                  index={index}
                />
              </ListItem>
            );
          }
        })}
      </List>
    </>
  );
};
export default ListsItem;
