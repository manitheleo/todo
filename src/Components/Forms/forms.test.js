import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditForm from "./EditForm";

test("Should update todo item current text, Given the user click on update button", () => {
  const handleEditFormSubmit = jest.fn();
  render(
    <EditForm onSubmit={handleEditFormSubmit} currentTodo="first todo item" />
  );
  const textInput = screen.getByRole("textbox");
  userEvent.type(textInput, "first todo item");
  userEvent.click(
    screen.getByRole("button", {
      name: /update/i,
    })
  );
  waitFor(() => {
    expect(handleEditFormSubmit).toHaveBeenCalledWith("first todo item");
  });
});
