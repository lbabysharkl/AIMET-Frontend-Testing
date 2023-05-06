import { useState, useCallback, useEffect, useRef } from "react";
import React from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  getMonth,
  getWeekOfMonth,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useMediaQuery } from "@mui/material";
import Event from "./event";
import Divider from "@mui/material/Divider";
import "regenerator-runtime/runtime";
import mockEventData from "../public/mock_data/event_data.json";
import { loadEventsForSpecificMonthYear } from "../utils/api.js";
const colStartClasses = [
  "col-start-7",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Calendar = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const [prevMonthEvents, setPrevMonthEvents] = useState([]);
  const [prevMonthIdentifier, setPrevMonthIdentifier] = useState("");
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const [showCircle, setShowCircle] = useState(false);
  const calendarRef = useRef(null);
  const isWideScreen = useMediaQuery("(min-width:1280px)");
  const [events, setEvents] = useState([]);
  const [hasEvents, setHasEvents] = useState(false);

  const calculateCirclePosition = (days, idx) => {
    const numCols = 7;
    const colIdx =
      getDay(days[idx]) == "0" ? 6 : (getDay(days[idx]) % numCols) - 1;
    const rowIdx =
      getDay(days[idx]) == "0"
        ? Math.floor(getWeekOfMonth(days[idx]) - 2)
        : Math.floor(getWeekOfMonth(days[idx]) - 1);
    const destX = isWideScreen ? colIdx * 135.5 - 437 : colIdx * 64 - 217;
    const destY = isWideScreen ? rowIdx * 72 - 140 : rowIdx * 68 - 140;
    setCirclePosition({ x: destX, y: destY });
  };

  const handleClick = (dayIdx) => {
    setSelectedDayIdx(dayIdx);
    setSelectedDay(days[dayIdx]);
    calculateCirclePosition(days, dayIdx);
  };

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });
  const todayIdx = days.findIndex((day) => isSameDay(day, today));
  const [selectedDayIdx, setSelectedDayIdx] = useState(todayIdx);
  const eventsInSelectedDay = events.filter(
    (event) =>
      selectedDay && isSameDay(parseISO(event.startDateTime), selectedDay)
  );

  const height = isWideScreen
    ? eventsInSelectedDay.length * 72 + 700
    : eventsInSelectedDay.length * 72 + 600;

  const previousMonth = useCallback(() => {
    setCurrentMonth((prevMonth) => {
      const firstDayNextMonth = add(parse(prevMonth, "MMM-yyyy", new Date()), {
        months: -1,
      });
      return format(firstDayNextMonth, "MMM-yyyy");
    });
    setShowCircle(false);
    setSelectedDay(null);
  }, []);

  const nextMonth = useCallback(() => {
    setCurrentMonth((prevMonth) => {
      const firstDayNextMonth = add(parse(prevMonth, "MMM-yyyy", new Date()), {
        months: 1,
      });
      return format(firstDayNextMonth, "MMM-yyyy");
    });
    setShowCircle(false);
    setSelectedDay(null);
  }, []);

  useEffect(() => {
    setShowCircle(false);
    calculateCirclePosition(days, todayIdx);
    setShowCircle(true);
    setSelectedDay(today);
  }, []);

  useEffect(() => {
    setShowCircle(false);
    calculateCirclePosition(days, selectedDayIdx);
    setShowCircle(true);
  }, [isWideScreen]);

  useEffect(() => {
    const month = parseInt(format(firstDayCurrentMonth, "M"), 10);
    const year = parseInt(format(firstDayCurrentMonth, "yyyy"), 10);
    const filePath = "/mock_data/event_data.json";
    const currentMonthIdentifier = format(firstDayCurrentMonth, "MMM-yyyy");
    if (currentMonthIdentifier === prevMonthIdentifier) {
      setEvents(prevMonthEvents);
    } else {
      setPrevMonthEvents(events);
      setPrevMonthIdentifier(currentMonth);

      loadEventsForSpecificMonthYear(month, year, filePath).then(
        (loadedEvents) => {
          setEvents(loadedEvents);
        }
      );
    }
  }, [currentMonth]);

  useEffect(() => {
    const eventsExist = events.some((event) =>
      isSameDay(parseISO(event.startDateTime), selectedDay)
    );
    setHasEvents(eventsExist);
  }, [selectedDay, events]);

  return (
    <div className="flex items-center justify-center">
      <div
        className="grow bg-white p-[72px] rounded-[12px] ipad:max-w-[600px] desktop:max-w-[1100px] font-inter text-clip overflow-hidden border-red-600 border-2"
        style={{
          height: isWideScreen
            ? hasEvents
              ? `${height}px`
              : "700px"
            : hasEvents
            ? `${height}px`
            : "600px",
          transition: "height 1s ease-in-out",
        }}
        ref={calendarRef}
      >
        <div className="grid grid-cols-7 items-center">
          <div
            className="font-bold text-[#333333]  desktop:text-[36px] text-[24px] col-span-6 desktop:ml-[40px] ml-[14px]"
            data-testid="current-month"
          >
            {format(firstDayCurrentMonth, "MMMM yyyy")}
          </div>
          <div className="font-bold text-[#333333]  desktop:text-[36px] text-[24px] col-span-1 place-items-center">
            <div className="flex flex-row items-center justify-around">
              <button
                type="button"
                onClick={previousMonth}
                className="flex flex-none items-center justify-center text-[#333333] text-[12px] hover:text-gray-500"
                data-testid="prev-month-btn"
              >
                <span className="sr-only">Previous month</span>
                <NavigateBeforeIcon className="w-7 h-7" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="flex flex-none items-center justify-center text-[#333333] text-[12px] hover:text-gray-500"
                data-testid="next-month-btn"
              >
                <span className="sr-only">Next month</span>
                <NavigateNextIcon className="w-7 h-7" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 mt-[56px] desktop:text-[36px] text-[24px] leading-6 text-center text-[#333333] font-medium">
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
          <div>Su</div>
        </div>
        <div className="flex flex-col ">
          <div className="relative">
            <div className="grid grid-cols-7 mt-2 desktop:text-[36px] text-[24px] h-[300px]">
              {showCircle && (
                <div
                  className="w-[50px] h-[50px] desktop:w-[60px] desktop:h-[60px] rounded-full bg-[#FB3F4A] absolute top-1/2 left-1/2 ease-in-out duration-1000"
                  style={{
                    transform: `translateX(${circlePosition.x}px) translateY(${circlePosition.y}px)`,
                  }}
                ></div>
              )}
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-[6px] relative"
                  )}
                  data-testid="day"
                >
                  <button
                    data-testid={`day-${dayIdx}`}
                    type="button"
                    onClick={() => {
                      handleClick(dayIdx);
                      setShowCircle(true);
                    }}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white duration-1000",
                      !isEqual(day, selectedDay) &&
                        "text-[#666666] hover:bg-gray-200 duration-1000",
                      "mx-auto flex h-[56px] w-[56px] desktop:h-[60px] desktop:w-[60px] items-center justify-center rounded-full  z-10 bg-transparent"
                    )}
                    class-test={
                      isEqual(day, selectedDay) ? "selected-day" : "day"
                    }
                  >
                    <div className="flex flex-col items-center text-center flex-1 justify-center z-10 bg-transparent">
                      <time
                        dateTime={format(day, "yyyy-MM-dd")}
                        className="h-[29px]"
                      >
                        {format(day, "d")}
                      </time>
                      <div className="w-[6px] h-[6px] ipad:mt-[8px] desktop:mt-[20px]">
                        {events.some((event) =>
                          isSameDay(parseISO(event.startDateTime), day)
                        ) &&
                          !isEqual(day, selectedDay) && (
                            <div className="w-[6px] h-[6px] rounded-full bg-[#FB3F4A]"></div>
                          )}
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
          {hasEvents ? (
            <Divider className="ipad:my-[32px] desktop:my-[60px]" />
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col text-[24px] text-black mt-8 ml-[14px] desktop:ml-[40px]">
          {selectedDay &&
            showCircle &&
            events
              .filter((event) =>
                isSameDay(parseISO(event.startDateTime), selectedDay)
              )
              .sort(
                (a, b) => parseISO(a.startDateTime) - parseISO(b.startDateTime)
              )
              .map((event) => (
                <Event
                  key={event.startDateTime}
                  event={event}
                  data-testid="event"
                ></Event>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
