import "./App.css";
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
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };
  const handleEditInput = (e) => {
    setCurrentTodo({ ...currentTodo, task: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { id: tasks.length + 1, task: todo }]);
    setTodo("");
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
    console.log(tasks);
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
        todo={todo}
        handleInputChange={handleInputChange}
        handleEditFormSubmit={handleEditFormSubmit}
        handleEditInput={handleEditInput}
        handleFormSubmit={handleFormSubmit}
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
