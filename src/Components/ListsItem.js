import { List } from "@mui/material";

import Listitem from "./Listitem";
const ListsItem = ({ tasks, handleEditClick, handleDeleteItem }) => {
  return (
    <List dense>
      {tasks.map((item, index) => {
        return (
          <Listitem
            key={index}
            item={item}
            id={index}
            handleEditClick={handleEditClick}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
    </List>
  );
};
export default ListsItem;
