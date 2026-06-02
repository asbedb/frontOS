// src/applications/system/desktop-environment/themes/ThemeContext.ts

import { createContext, useContext } from "react";
import type { FullTheme } from "./types";

const defaultFullTheme: FullTheme = {
  taskbar: {
    wrapper: {
      display: `flex h-[50px] w-full`,
      color: `bg-gradient-to-b from-[#437efe] via-[#034dd6] via-20%
        to-[#245edb]`,
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
  },
  systemtray: {
    systemTrayWrapper: {
      display: `flex h-full flex-none flex-col`,
      align: `justify-center`,
      text: `text-right leading-tight`,
    },
    systemTray: {
      display: `flex h-full w-[155px] flex-row gap-2`,
      align: `items-center justify-end`,
      color: `bg-gradient-to-b from-[#78bef0] via-[#3296e8] via-20% to-[#2176bc] pr-2`,
    },
    systemTrayExpandButton: {
      display: `relative -left-5 flex min-h-[40px] min-w-[40px] p-0`,
      align: `items-center justify-center`,
      border: `rounded-full`,
      color: `bg-gradient-to-tl from-[#0e6cb8] via-[#0e8aee] via-60% to-[#99cdf3]`,
      text: `text-xl font-bold drop-shadow-md`,
      hover: `hover:cursor-pointer hover:from-[#40a3f5] hover:via-[#3e9fee] hover:to-[#badcf5]`,
      focus: `focus:from-[#54abf2] focus:via-[#48a5f0] focus:to-[#98cff6]`,
    },
    volIcon: {
      iconSrc: `img/ico/vol.png`,
      iconStyle: `h-[30px] pt-2`,
    },
  },
  startbutton: {
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
  },
  startmenustyles: {
    wrapper: {
      display: `flex flex-col bottom-[52px] left-[2px] min-w-[550px] `,
      color: `bg-[#acd0f1]`,
      border: `rounded-t-xl`,
      zIndex: `z-99`,
    },
    startMenuHeader: {
      display: `flex p-4 items-center gap-2 `,
      color: `bg-gradient-to-t from-[#487cec] via-[#034dd6] via-90% to-[#3671f0]`,
      border: `rounded-t-xl`,
    },
    profilepicture: {
      iconSrc: `img/ico/default_pfp.png`,
      iconStyle: `flex w-[60px] border-2 rounded-md`,
      iconAlt: `User Profile`,
    },
    username: {
      text: `text-2xl`,
    },
    innermenu: {
      display: `flex flex-1 flex-col `,
      border: `border-[#487cec] border-x-8 border-y-4`,
    },
    pannelwrapper: {
      display: `flex flex-1 flex-row`,
    },
  },
  dividerstyles: {
    orange: {
      display: `h-[4px] `,
      color: `bg-gradient-to-r from-white/1% via-orange-500 via-50% to-white/1%`,
    },
    black: {
      display: `h-[1px]`,
      color: `bg-gradient-to-r from-white/1% via-black/50 via-50% to-white/1%`,
    },
  },
  desktopstyles: {
    wrapper: {
      display: "flex w-full h-full",
      color: "bg-black",
    },
  },
  windowstyles: {
    wrapper: {
      display: "flex w-20 h-20",
      color: "bg-black",
      border: "rounded-2xl",
      zIndex: "z-10",
    },
  },
};

export const ThemeContext = createContext<FullTheme | null>(defaultFullTheme);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    console.error(
      "useTheme called outside of a properly loaded ThemeContext. Returning default theme as a last resort.",
    );
    return defaultFullTheme;
  }
  return context;
};
