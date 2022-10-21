import { TextField } from "@mui/material";
import CancelButton from "../Buttons/CancelButton";
import UpdateButton from "../Buttons/UpdateButton";

const EditForm = ({
  handleEditFormSubmit,
  currentTodo,
  handleEditInput,
  setEdit,
}) => {
  return (
    <>
      <form onSubmit={handleEditFormSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={currentTodo.task}
          onChange={handleEditInput}
        />
        <UpdateButton />
        <CancelButton setEdit={setEdit} />
      </form>
    </>
  );
};
export default EditForm;
