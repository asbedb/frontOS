// src/applications/system/desktop-environment/components/time/TimeComponent.tsx

import { useEffect, useState } from "react";
import { CLOCK_INTERVAL } from "../constants/constants";
import type { CurrentTime } from "../types/types";

const getTime = (): CurrentTime => {
  const now = new Date();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  if (hours === 0 && minutes === 0) {
    return "MIDNIGHT";
  }
  if (hours === 12 && minutes === 0) {
    return "NOON";
  }
  const meridiem = hours >= 12 ? "PM" : "AM";
  let hoursForDisplay = hours % 12;
  if (hoursForDisplay === 0) hoursForDisplay = 12;
  return { hour: hoursForDisplay, minutes: minutes, meridiem: meridiem };
};

function TimeComponent() {
  const [time, setTime] = useState<CurrentTime>(getTime);
  useEffect(() => {
    const intervalId = setInterval(() => setTime(getTime()), CLOCK_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);
  let displayContent: React.ReactNode;
  if (time === "NOON") {
    displayContent = "NOON";
  } else if (time === "MIDNIGHT") {
    displayContent = "MIDNIGHT";
  } else {
    const formattedMinutes =
      time.minutes < 10 ? `0${time.minutes}` : time.minutes;
    displayContent = `${time.hour}:${formattedMinutes} ${time.meridiem}`;
  }
  return <div>{displayContent}</div>;
}

export default TimeComponent;
