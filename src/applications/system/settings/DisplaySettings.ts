// src/system/settings/DisplaySettings.ts
import type { DisplaySettings, AvailableThemes } from "./types";

const displaySettings: DisplaySettings = {
  currentThemePreference: "bindows-xd",
  currentBackgroundType: "solid",
  currentBackgroundColor: "bg-blue-800",
};

export const getActiveThemeName = (): string => {
  return displaySettings.currentThemePreference;
};

export const setActiveThemeName = (themeName: AvailableThemes): void => {
  displaySettings.currentThemePreference = themeName;
  console.log(`DisplaySettings: Theme preference updated to ${themeName}`);
};

// implement get and set wallpaper
