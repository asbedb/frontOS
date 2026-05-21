// src/applications/system/settings/types.ts

export type AvailableThemes = "bindows-xd" | "sleek";
type BackgroundOptions = "solid" | "wallpaper";

export interface DisplaySettings {
  currentThemePreference: AvailableThemes;
  currentBackgroundType: BackgroundOptions;
  currentBackgroundColor?: string;
}
