// event.js

import React, { useState, useEffect } from "react";

export const formatTime = (dateTime) => {
  const date = new Date(dateTime);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (minutes === 0) {
    const formattedHours = hours % 12 || 12;
    const amPm = hours < 12 ? "AM" : "PM";
    return formattedHours + " " + amPm;
  } else {
    return date.toLocaleTimeString([], {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
    });
  }
};

const Event = ({ event }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`box ${
        isVisible ? "visible text-black mt-[10px]" : "mt-[10px] "
      }`}
      style={{
        transform: `translateY(-50%)`,
        transition: "opacity 3s ease, transform 3s ease",
      }}
    >
      <div
        className="text-[16px] desktop:text-[24px] font-inter"
        style={{
          transform: `translateY(-50%)`,
          transition: "opacity 3s ease, transform 3s ease",
        }}
      >
        {formatTime(event.startDateTime)} - {formatTime(event.endDateTime)}
      </div>
      <div
        className="text-[24px] font-inter mt-[8px] desktop:text-[32px]"
        style={{
          transform: `translateY(-50%)`,
          transition: "opacity 3s ease, transform 3s ease",
        }}
      >
        {event.event}
      </div>
    </div>
  );
};

export default Event;
