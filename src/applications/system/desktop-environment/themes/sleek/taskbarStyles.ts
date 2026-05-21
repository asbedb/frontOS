// src/system/desktop-environment/themes/sleek/taskbarStyles.ts

import type { TaskbarThemeStyles } from "../types";

export const taskbarStyles: TaskbarThemeStyles = {
  wrapper: {
    display: `flex h-[50px] w-full`,
    color: ` bg-gradient-to-b from-gray-900 via-gray-800/35 via-20% to-gray-700`,
  },
  applicationBarWrapper: {
    display: `flex-1 overflow-hidden p-2 whitespace-nowrap`,
  },
  application: {
    display: `flex w-[10svw] p-2`,
    align: `items-center justify-center`,
    border: `rounded-xl border-1 border-solid border-white`,
    hover: `hover:cursor-pointer hover:border-white/50 hover:bg-white/25`,
    focus: `focus:border-white/45 focus:bg-white/40`,
    active: `active:border-white/75 active:bg-white/45`,
  },
};
