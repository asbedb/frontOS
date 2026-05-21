import React from "react";

export interface ReactNodeProps {
  children: React.ReactNode;
  link?: string;
}

export type CurrentTime =
  | {
      hour: number;
      minutes: number;
      meridiem: "AM" | "PM";
    }
  | "NOON"
  | "MIDNIGHT";

export type CurrentDate = {
  day: number;
  month: number;
  year: number;
};
