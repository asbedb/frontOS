// src/system/desktop-environment/themes/types.ts
interface BaseStyleGroup {
  display?: string;
  color?: string;
  align?: string;
  text?: string;
  border?: string;
  hover?: string;
  focus?: string;
  active?: string;
  iconSrc?: string;
  iconStyle?: string;
  iconAlt?: string;
  zIndex?: string;
}
export interface DividerStyles {
  orange: Pick<BaseStyleGroup, "display" | "color">;
  black: Pick<BaseStyleGroup, "display" | "color">;
}
export interface SystemTrayThemeStyles {
  systemTrayWrapper: Pick<BaseStyleGroup, "display" | "align" | "text">;
  systemTray: Pick<BaseStyleGroup, "display" | "align" | "color">;
  systemTrayExpandButton: Pick<
    BaseStyleGroup,
    "display" | "align" | "border" | "color" | "text" | "hover" | "focus"
  >;
  volIcon: Pick<BaseStyleGroup, "iconSrc" | "iconStyle">;
}
export interface StartButtonThemeStyles {
  startButtonWrapper: Pick<BaseStyleGroup, "display">;
  startButton: Pick<
    BaseStyleGroup,
    "text" | "display" | "align" | "border" | "color" | "hover" | "focus"
  >;
  startButtonIcon: Pick<BaseStyleGroup, "iconSrc" | "iconStyle">;
}
export interface StartMenuStyles {
  wrapper: Pick<BaseStyleGroup, "display" | "color" | "border">;
  startMenuHeader: Pick<BaseStyleGroup, "display" | "color" | "border">;
  profilepicture: Pick<BaseStyleGroup, "iconSrc" | "iconStyle" | "iconAlt">;
  username: Pick<BaseStyleGroup, "text">;
  innermenu: Pick<BaseStyleGroup, "display" | "border">;
  pannelwrapper: Pick<BaseStyleGroup, "display">;
}
export interface TaskbarThemeStyles {
  wrapper: Pick<BaseStyleGroup, "display" | "color">;
  applicationBarWrapper: Pick<BaseStyleGroup, "display">;
  application: Pick<
    BaseStyleGroup,
    "display" | "align" | "border" | "hover" | "focus" | "active"
  >;
}
export interface DesktopStyles {
  wrapper: Pick<BaseStyleGroup, "display" | "color" | "zIndex">;
}
export interface WindowStyles {
  wrapper: Pick<
    BaseStyleGroup,
    "display" | "color" | "zIndex" | "border" | "hover"
  >;
}

export interface FullTheme {
  taskbar: TaskbarThemeStyles;
  systemtray: SystemTrayThemeStyles;
  startbutton: StartButtonThemeStyles;
  startmenustyles: StartMenuStyles;
  dividerstyles: DividerStyles;
  desktopstyles: DesktopStyles;
  windowstyles: WindowStyles;
}
