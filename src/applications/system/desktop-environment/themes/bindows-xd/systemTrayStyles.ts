// src/applications/system/desktop-environment/themes/bindows-xd/systemTrayStyles.ts

import type { SystemTrayThemeStyles } from "../types";

export const systemTrayStyles: SystemTrayThemeStyles = {
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
};
