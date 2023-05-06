import { renderHook } from "@testing-library/react-hooks";
import Calendar from "./calendar";
import Event from "./event";
import "core-js/modules/es.date.to-string";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { loadEventsForSpecificDay } from "../utils/api";
import React from "react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";

// test("previousMonth changes the current month to the previous month", () => {
//   const { debug } = render(<Calendar />);

//   debug();
// });

test("clicking previousMonth button changes the current month to the previous month", () => {
  act(() => {
    render(<Calendar />);
  });

  const prevMonthBtn = screen.getByTestId("prev-month-btn");
  act(() => {
    fireEvent.click(prevMonthBtn);
  });

  const currentMonthText = screen.getByTestId("current-month");
  expect(currentMonthText).toHaveTextContent("April 2023");
});

test("clicking nextMonth button changes the current month to the next month", () => {
  act(() => {
    render(<Calendar />);
  });
  const prevMonthBtn = screen.getByTestId("next-month-btn");
  act(() => {
    fireEvent.click(prevMonthBtn);
  });

  const currentMonthText = screen.getByTestId("current-month");
  expect(currentMonthText).toHaveTextContent("June 2023");
});

test("renders current month correctly", () => {
  act(() => {
    render(<Calendar />);
  });
  const currentMonthText = screen.getByTestId("current-month");
  expect(currentMonthText).toBeInTheDocument();
});

test("renders weekdays", () => {
  act(() => {
    render(<Calendar />);
  });
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  weekdays.forEach((weekday) => {
    const weekdayElement = screen.getByText(weekday);
    expect(weekdayElement).toBeInTheDocument();
  });
});

test("renders days of the current month", () => {
  act(() => {
    render(<Calendar />);
  });
  const daysOfMonth = screen.getAllByTestId("day");
  const lastDayOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();
  expect(daysOfMonth.length).toEqual(lastDayOfMonth);
});

test("clicking on a day selects the day", () => {
  render(<Calendar />);
  const dayElement1 = screen.getByTestId("day-1");
  const dayElement2 = screen.getByTestId("day-2");
  fireEvent.click(dayElement1);
  expect(dayElement1).toHaveAttribute("class-test", "selected-day");
  expect(dayElement2).toHaveAttribute("class-test", "day");
});
