import { render, screen } from "@testing-library/react";
import ListsItem from "./ListsItem";
test("Should add list of  todo item in current text, Given the user click on add button", () => {
  render(
    <ListsItem
      tasks={[
        {
          task: "first todo item",
          state: "pending",
          id: "1",
        },
      ]}
    />
  );
  const list = screen.getByText("first todo item");
  expect(list).toBeInTheDocument();
});
