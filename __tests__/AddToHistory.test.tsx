//check what button was clicked
//check if dispatch corectly
//check if next one was random
//check if was added to the list
//check status of element in list
//check counter value increment
import React from "react";
import { describe, expect, it, vi } from "vitest";
import Card from "../src/Pages/Home/components/Card";
import { render, fireEvent } from "@testing-library/react";

const mockCardData = {
  polish: "test",
  english: "test",
};
describe("Card Added to history", () => {
  // const card = render(<Card polish={mockCardData.polish} english={mockCardData.english} />);
  it("button fireEvent", async () => {
    const event = vi.spyOn(console, "log").mockImplementation(() => undefined);
    const button = render(
      <Card polish={mockCardData.polish} english={mockCardData.english} />
    ).getByTestId("confirmButton");
    //screen.debug(button);
    fireEvent.click(button);
    expect(event).toBeCalledTimes(1);
    expect(event).toBeCalledWith("true");
  });
});
