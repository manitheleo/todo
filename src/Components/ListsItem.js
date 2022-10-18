import { List } from "@mui/material";

import Listitem from "./Listitem";
const ListsItem = (props) => {
  return (
    <>
      <List dense>
        {props.tasks.map((item, index) => {
          if (item.state === "pending") {
            return (
              <Listitem
                itemState={item.state}
                itemTask={item.task}
                item={item}
                index={index}
                itemColor={"green"}
                handleEditClick={props.handleEditClick}
                handleDeleteItem={props.handleDeleteItem}
              />
            );
          } else if (item.state === "in progress") {
            return (
              <Listitem
                itemState={item.state}
                itemTask={item.task}
                item={item}
                index={index}
                itemColor={"blue"}
                handleEditClick={props.handleEditClick}
                handleDeleteItem={props.handleDeleteItem}
              />
            );
          } else if (item.state === "completed") {
            return (
              <Listitem
                itemState={item.state}
                itemTask={item.task}
                item={item}
                index={index}
                itemColor={"line-Through"}
                handleEditClick={props.handleEditClick}
                handleDeleteItem={props.handleDeleteItem}
              />
            );
          } else {
            return (
              <Listitem
                itemState={item.state}
                itemTask={item.task}
                item={item}
                index={index}
                handleEditClick={props.handleEditClick}
                handleDeleteItem={props.handleDeleteItem}
              />
            );
          }
        })}
      </List>
    </>
  );
};
export default ListsItem;
