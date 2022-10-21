import EditForm from "./Forms/EditForm";
import Form from "./Forms/Form";
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
    return <Form formik={formik} />;
  }
};
export default ToggleEdit;
