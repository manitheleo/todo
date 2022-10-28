import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

test("Should return todo item current text, Given the user click on edit button", async () => {
  let item = "first todo item";
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
  let id = "1";
  const handleDeleteItem = jest.fn();
  render(<DeleteButton handleDeleteItem={handleDeleteItem} id={id} />);
  userEvent.click(
    screen.getByRole("button", {
      name: /delete/i,
    })
  );
  expect(handleDeleteItem).toHaveBeenCalledWith("1");
});
