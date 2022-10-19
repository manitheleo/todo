import EditForm from "./Forms/EditForm";
import Form from "./Forms/Form";
const ToggleEdit = (props) => {
  if (props.edit) {
    return (
      <EditForm
        handleEditFormSubmit={props.handleEditFormSubmit}
        setEdit={props.setEdit}
        currentTodo={props.currentTodo}
        handleEditInput={props.handleEditInput}
      />
    );
  } else {
    return (
      <Form
        handleFormSubmit={props.handleFormSubmit}
        todo={props.todo}
        handleInputChange={props.handleInputChange}
      />
    );
  }
};
export default ToggleEdit;
