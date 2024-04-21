import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "../src/Pages/Home";

describe("Home test", () => {
  test("should dispay a title", () => {
    render(<Home />);
    expect(screen.getAllByText("Home")).toBeDefined();
  });
});
