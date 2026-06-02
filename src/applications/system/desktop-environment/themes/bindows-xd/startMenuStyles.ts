// src/system/desktop-environment/themes/bindows-xd/startMenuStyles.ts

import type { StartMenuStyles } from "../types";

export const startMenuStyles: StartMenuStyles = {
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
};
