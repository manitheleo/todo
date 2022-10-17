import { Button } from "@mui/material";
const CancelButton = (props) => {
  return (
    <>
      <Button onClick={() => props.setEdit(false)}>cancel</Button>
    </>
  );
};
export default CancelButton;
