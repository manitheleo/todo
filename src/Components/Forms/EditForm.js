import { TextField } from "@mui/material";
import CancelButton from "../Buttons/CancelButton";
import UpdateButton from "../Buttons/UpdateButton";

const EditForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleEditFormSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={props.currentTodo.task}
          onChange={props.handleEditInput}
        />
        <UpdateButton />
        <CancelButton setEdit={props.setEdit} />
      </form>
    </>
  );
};
export default EditForm;
