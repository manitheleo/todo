import { Button } from "@mui/material";

const DeleteButton = (props) => {
  return (
    <>
      <Button onClick={() => props.handleDeleteItem(props.index)}>
        delete
      </Button>
    </>
  );
};
export default DeleteButton;
