import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders and submitting a form", async () => {
  const handleSubmit = jest.fn();

  render(<App />);
  userEvent.type(screen.getByLabelText(/name/i), "first todo item");
  userEvent.type(
    screen.getByRole("button", {
      name: /add to todo list/i,
    })
  );
  waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      name: "first todo item",
    })
  );
});
