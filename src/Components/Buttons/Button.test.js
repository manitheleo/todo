import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  waitFor(() => {
    expect(handleEditClick).toBe("first todo item");
  });
});
