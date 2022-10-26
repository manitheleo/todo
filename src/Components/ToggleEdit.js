import EditForm from "./Forms/EditForm";
import FormSubmit from "./Forms/FormSubmit";
const ToggleEdit = ({
  handleSubmit,
  edit,
  getFieldProps,
  handleEditFormSubmit,
  setEdit,
  currentTodo,
  handleEditInput,
  error,
}) => {
  if (edit) {
    return (
      <EditForm
        handleEditFormSubmit={handleEditFormSubmit}
        setEdit={setEdit}
        currentTodo={currentTodo}
        handleEditInput={handleEditInput}
      />
    );
  } else {
    return (
      <FormSubmit
        getFieldProps={getFieldProps}
        handleSubmit={handleSubmit}
        error={error}
      />
    );
  }
};
export default ToggleEdit;
