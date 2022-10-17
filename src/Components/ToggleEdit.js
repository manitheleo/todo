import EditForm from "./Forms/EditForm";
import Form from "./Forms/Form";
const ToggleEdit = (props) => {
  return (
    <>
      {props.edit ? (
        <EditForm
          handleEditFormSubmit={props.handleEditFormSubmit}
          setEdit={props.setEdit}
          currentTodo={props.currentTodo}
          handleEditInput={props.handleEditInput}
        />
      ) : (
        <Form
          handleFormSubmit={props.handleFormSubmit}
          todo={props.todo}
          handleInputChange={props.handleInputChange}
        />
      )}
    </>
  );
};
export default ToggleEdit;
