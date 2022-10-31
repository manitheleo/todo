import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import CancelButton from "./CancelButton";

test("Should return todo item current text, Given the user click on edit button", async () => {
  const item = "first todo item";
  const handleEditClick = jest.fn();
  render(<EditButton handleEditClick={handleEditClick} item={item} />);
  userEvent.click(
    screen.getByRole("button", {
      name: /edit/i,
    })
  );

  expect(handleEditClick).toHaveBeenCalledWith("first todo item");
});

test("should delete todo item current text,Given the user click delete button", async () => {
  const id = "1";
  const handleDeleteItem = jest.fn();
  render(<DeleteButton handleDeleteItem={handleDeleteItem} id={id} />);
  userEvent.click(
    screen.getByRole("button", {
      name: /delete/i,
    })
  );
  expect(handleDeleteItem).toHaveBeenCalledWith("1");
});
test("should cancel the todo item current text Given the user click cancel button", async () => {
  const setEdit = jest.fn();
  render(<CancelButton setEdit={setEdit} />);
  userEvent.click(
    screen.getByRole("button", {
      name: /cancel/i,
    })
  );
  expect(setEdit).toHaveBeenCalledTimes(1);
});
