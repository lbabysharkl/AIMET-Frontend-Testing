import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Event from "./event";
import { formatTime } from "./event";
import "@testing-library/jest-dom/extend-expect";

describe("Event", () => {
  const event = {
    startDateTime: "2023-05-06T14:00:00Z",
    endDateTime: "2023-05-06T16:00:00Z",
    event: "Meeting with John",
  };

  test("formatTime function formats time correctly", () => {
    const date1 = new Date("2043-11-13T07:47");
    const date2 = new Date("2022-01-01T15:30");
    const date3 = new Date("2022-01-01T00:00");

    expect(formatTime(date1)).toBe("7:47 AM");
    expect(formatTime(date2)).toBe("3:30 PM");
    expect(formatTime(date3)).toBe("12 AM");
  });

  test("renders the name of the event", () => {
    const { getByText } = render(<Event event={event} />);
    const eventName = getByText("Meeting with John");

    expect(eventName).toBeInTheDocument();
  });

  test("sets the isVisible state to true on mount", () => {
    const { getByText } = render(<Event event={event} />);
    const eventBox = getByText("Meeting with John").parentElement;

    expect(eventBox).toHaveClass("visible");
  });
});
