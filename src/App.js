import "./App.css";
import { useFormik } from "formik";
import { Container } from "@mui/material";
import { useState } from "react";
import ListsItem from "./Components/ListsItem";
import ToggleEdit from "./Components/ToggleEdit";
function App() {
  const defaultTasks = [
    { task: "first todo item", state: "pending", id: "1" },
    { task: "second todo item", state: "in progress", id: "2" },
    { task: "second todo item", state: "completed", id: "3" },
  ];
  const [tasks, setTasks] = useState(defaultTasks);
  const initialValues = {
    task: "",
  };
  const onSubmit = (values) => {
    setTasks([...tasks, { id: tasks.length + 1, task: values.task }]);
    formik.values.task = "";
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  const [edit, setEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const handleEditInput = (e) => {
    setCurrentTodo({ ...currentTodo, task: e.target.value });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, { ...currentTodo });
  };
  const handleUpdateTodo = (id, updateTodo) => {
    setEdit(false);
    setTasks((prevTasks) => {
      return prevTasks.map((todo) => (todo.id === id ? updateTodo : todo));
    });
  };
  const handleEditClick = (todo) => {
    setEdit(true);
    setCurrentTodo({ ...todo });
  };
  const handleDeleteItem = (value) => {
    const del = tasks.filter((fine, index) => index !== value);
    setTasks(del);
  };
  return (
    <Container>
      <ToggleEdit
        edit={edit}
        setEdit={setEdit}
        currentTodo={currentTodo}
        formik={formik}
        handleEditFormSubmit={handleEditFormSubmit}
        handleEditInput={handleEditInput}
      />

      <ListsItem
        tasks={tasks}
        handleEditClick={handleEditClick}
        handleDeleteItem={handleDeleteItem}
      />
    </Container>
  );
}

export default App;
