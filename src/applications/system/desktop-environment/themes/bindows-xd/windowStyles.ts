// src/applications/system/desktop-environment/themes/bindows-xd/windowStyles.ts

import type { WindowStyles } from "../types";

export const windowStyles: WindowStyles = {
  wrapper: {
    display:
      "w-200 h-200 flex items-center justify-center text-center text-2xl",
    color: "bg-white text-black",
    zIndex: "z-10",
    border: "rounded-2xl border-solid border-2 ",
    hover: "hover:cursor-move",
  },
};
