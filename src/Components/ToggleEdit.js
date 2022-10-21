import EditForm from "./Forms/EditForm";
import FormSubmit from "./Forms/FormSubmit";
const ToggleEdit = ({
  formik,
  edit,
  handleEditFormSubmit,
  setEdit,
  currentTodo,
  handleEditInput,
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
    return <FormSubmit formik={formik} />;
  }
};
export default ToggleEdit;
