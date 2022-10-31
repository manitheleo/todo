import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditForm from "./EditForm";

test("when the user click edit form", async () => {
  const handleEditFormSubmit = jest.fn();
  render(
    <EditForm onSubmit={handleEditFormSubmit} currentTodo={"first todo item"} />
  );

  userEvent.type(screen.getByRole("textbox"));
  userEvent.click(
    screen.getByRole("button", {
      name: /update/i,
    })
  );
  waitFor(() =>
    expect(handleEditFormSubmit).toHaveBeenCalledWith("first todo item")
  );
});
