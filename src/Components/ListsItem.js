import { List } from "@mui/material";

import Listitem from "./Listitem";
const ListsItem = (props) => {
  return (
    <List dense>
      {props.tasks.map((item, index) => {
        return (
          <Listitem
            item={item}
            id={index}
            handleEditClick={props.handleEditClick}
            handleDeleteItem={props.handleDeleteItem}
          />
        );
      })}
    </List>
  );
};
export default ListsItem;
