// src/system/desktop-environment/themes/bindows-xd/startButtonStyles.ts

import type { StartButtonThemeStyles } from "../types";

export const startButtonStyles: StartButtonThemeStyles = {
  startButtonWrapper: {
    display: `flex-none`,
  },
  startButton: {
    text: `text-2xl font-semibold text-shadow-black/60 text-shadow-md`,
    display: `flex h-full w-[150px]`,
    align: `items-center justify-center`,
    border: `rounded-tr-2xl rounded-br-2xl border-white`,
    color: `bg-gradient-to-b from-[#5aeb5a] via-[#02ba02] via-20% to-[#1b511b] to-90% pr-4  `,
    hover: `hover:cursor-pointer hover:from-[#6fff6f] hover:via-[#5ee55e] hover:to-[#2b612b] `,
    focus: `focus:from-[#6fff6f] focus:via-[#5ee55e] focus:to-[#2b612b]`,
  },
  startButtonIcon: {
    iconSrc: `img/ico/windows_icon.png`,
    iconStyle: `flex h-[25px]`,
  },
};
