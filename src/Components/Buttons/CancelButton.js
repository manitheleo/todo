import { Button } from "@mui/material";
const CancelButton = ({ setEdit }) => {
  return <Button onClick={() => setEdit(false)}>cancel</Button>;
};
export default CancelButton;
