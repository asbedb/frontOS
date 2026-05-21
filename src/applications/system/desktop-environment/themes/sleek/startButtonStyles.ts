// src/applications/system/desktop-environment/themes/sleek/startButtonStyles.ts

import type { StartButtonThemeStyles } from "../types";

export const startButtonStyles: StartButtonThemeStyles = {
  startButtonWrapper: {
    display: `flex-none`,
  },
  startButton: {
    text: `text-xl font-semibold text-shadow-black/60 text-shadow-md`,
    display: `flex h-full w-[100px] pr-4`,
    align: `items-center justify-center`,
    border: `border-white`,
    color: `bg-gradient-to-t from-violet-600 via-purple-500/20 via-60% to-black/20 to-90%`,
    hover: `hover:cursor-pointer hover:from-violet-500 hover:via-purple-400/20 hover:to-black/10`,
    focus: `focus:from-violet-400 focus:via-purple-300/20 focus:to-black/40`,
  },
  startButtonIcon: {
    iconSrc: ``,
    iconStyle: ``,
  },
};
