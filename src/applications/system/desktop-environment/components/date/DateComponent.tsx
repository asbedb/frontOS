// src/applications/system/desktop-environment/components/date/DateComponent.ts

import type { CurrentDate } from "../types/types";
import { useEffect, useState } from "react";

const getFormattedDate = (): CurrentDate => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return { day: day, month: month, year: year };
};

function DateComponent() {
  const [todaysDate, setTodaysDate] = useState<CurrentDate>(getFormattedDate);
  useEffect(() => {
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0,
    );
    const msUntilMidnight = midnight.getTime() - now.getTime();
    const timeoutId = setTimeout(() => {
      setTodaysDate(getFormattedDate());
      const intervalId = setInterval(
        () => setTodaysDate(getFormattedDate()),
        24 * 60 * 60 * 1000,
      );
      return () => clearInterval(intervalId);
    }, msUntilMidnight);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
      {todaysDate.day}/{todaysDate.month}/{todaysDate.year}
    </div>
  );
}

export default DateComponent;
