import type { SystemTrayThemeStyles } from "../types";

export const systemTrayStyles: SystemTrayThemeStyles = {
  systemTrayWrapper: {
    display: `flex h-full flex-none flex-col`,
    align: `justify-center`,
    text: `text-right leading-tight`,
  },
  systemTray: {
    display: `flex h-full w-[155px] flex-row gap-2 pr-2`,
    align: `items-center justify-end`,
    color: `bg-gradient-to-b from-gray-800 via-gray-700/35 via-20% to-gray-600`,
  },
  systemTrayExpandButton: {
    display: `relative -left-8 flex min-h-[25px] min-w-[25px]`,
    align: `items-center justify-center`,
    border: `rounded-sm `,
    color: ` bg-gradient-to-b from-gray-700 via-purple-800/20 via-60% to-black/70 to-90%`,
    text: `text-xl font-bold drop-shadow-md`,
    hover: `hover:from-violet-500 hover:via-purple-400/20 hover:to-black/10`,
    focus: `focus:from-violet-400 focus:via-purple-300/20 focus:to-black/40`,
  },
  volIcon: {
    iconSrc: `img/ico/vol.png`,
    iconStyle: `h-[30px] pt-2`,
  },
};
