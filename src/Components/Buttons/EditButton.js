import { Button } from "@mui/material";

const EditButton = ({ handleEditClick, item }) => {
  return <Button onClick={() => handleEditClick(item)}>edit</Button>;
};
export default EditButton;
