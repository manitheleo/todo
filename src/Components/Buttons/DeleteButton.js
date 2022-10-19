import { Button } from "@mui/material";

const DeleteButton = ({ handleDeleteItem, id }) => {
  return <Button onClick={() => handleDeleteItem(id)}>delete</Button>;
};
export default DeleteButton;
