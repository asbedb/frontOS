// src/applications/system/desktop-environment/themes/ThemeLoader.ts

import type {
  FullTheme,
  TaskbarThemeStyles,
  SystemTrayThemeStyles,
  StartButtonThemeStyles,
  StartMenuStyles,
  DividerStyles,
  DesktopStyles,
  WindowStyles,
} from "./types.ts";

const THEME_COMPONENT_STYLE_FILES = [
  "taskbarStyles",
  "systemTrayStyles",
  "startButtonStyles",
  "startMenuStyles",
  "dividerStyles",
  "desktopStyles",
  "windowStyles",
];

export async function loadTheme(themeName: string): Promise<FullTheme> {
  try {
    const themePromises = THEME_COMPONENT_STYLE_FILES.map((componentName) =>
      import(`./${themeName}/${componentName}.ts`)
        .then((importedModule) => importedModule[componentName])
        .catch((error) => {
          console.warn(
            `ThemeLoader: Could not load ${componentName} for theme "${themeName}".`,
            error,
          );
          throw error;
        }),
    );

    const loadedComponents = await Promise.all(themePromises);
    const fullTheme: Partial<FullTheme> = {};
    THEME_COMPONENT_STYLE_FILES.forEach((componentName, index) => {
      switch (componentName) {
        case "taskbarStyles":
          fullTheme.taskbar = loadedComponents[index] as TaskbarThemeStyles;
          break;
        case "systemTrayStyles":
          fullTheme.systemtray = loadedComponents[
            index
          ] as SystemTrayThemeStyles;
          break;
        case "startButtonStyles":
          fullTheme.startbutton = loadedComponents[
            index
          ] as StartButtonThemeStyles;
          break;
        case "startMenuStyles":
          fullTheme.startmenustyles = loadedComponents[
            index
          ] as StartMenuStyles;
          break;
        case "dividerStyles":
          fullTheme.dividerstyles = loadedComponents[index] as DividerStyles;
          break;
        case "desktopStyles":
          fullTheme.desktopstyles = loadedComponents[index] as DesktopStyles;
          break;
        case "windowStyles":
          fullTheme.windowstyles = loadedComponents[index] as WindowStyles;
          break;
        default:
          console.warn(
            `ThemeLoader: Unrecognized theme component style file: ${componentName}`,
          );
      }
    });

    console.log(`ThemeLoader: Successfully loaded theme "${themeName}".`);
    return fullTheme as FullTheme;
  } catch (error) {
    console.error(
      `ThemeLoader: Failed to load theme "${themeName}". Attempting to load default theme.`,
      error,
    );
    return await loadDefaultTheme();
  }
}

async function loadDefaultTheme(): Promise<FullTheme> {
  try {
    const defaultThemePromises = THEME_COMPONENT_STYLE_FILES.map(
      (componentName) =>
        import(`./default/${componentName}.ts`) // Assuming 'default' theme is always present
          .then((m) => m[componentName]),
    );
    const loadedComponents = await Promise.all(defaultThemePromises);

    const defaultFullTheme: Partial<FullTheme> = {};
    THEME_COMPONENT_STYLE_FILES.forEach((componentName, index) => {
      switch (componentName) {
        case "taskbarStyles":
          defaultFullTheme.taskbar = loadedComponents[
            index
          ] as TaskbarThemeStyles;
          break;
        case "systemTrayStyles":
          defaultFullTheme.systemtray = loadedComponents[
            index
          ] as SystemTrayThemeStyles;
          break;
        case "startButtonStyles":
          defaultFullTheme.startbutton = loadedComponents[
            index
          ] as StartButtonThemeStyles;
          break;
        case "startMenuStyles":
          defaultFullTheme.startmenustyles = loadedComponents[
            index
          ] as StartMenuStyles;
          break;
        case "dividerStyles":
          defaultFullTheme.dividerstyles = loadedComponents[
            index
          ] as DividerStyles;
          break;
        case "desktopStyles":
          defaultFullTheme.desktopstyles = loadedComponents[
            index
          ] as DesktopStyles;
          break;
        case "windowStyles":
          defaultFullTheme.windowstyles = loadedComponents[
            index
          ] as WindowStyles;
          break;
        default:
          console.warn(
            `ThemeLoader: Unrecognized default theme component style file: ${componentName}`,
          );
      }
    });

    console.log("ThemeLoader: Successfully loaded default theme.");
    return defaultFullTheme as FullTheme;
  } catch (error) {
    console.error(
      "ThemeLoader: CRITICAL ERROR! Could not load even the default theme. UI might be unstyled.",
      error,
    );
    return {
      taskbar: {} as TaskbarThemeStyles,
      systemtray: {} as SystemTrayThemeStyles,
      startbutton: {} as StartButtonThemeStyles,
      startmenustyles: {} as StartMenuStyles,
      dividerstyles: {} as DividerStyles,
      desktopstyles: {} as DesktopStyles,
      windowstyles: {} as WindowStyles,
    };
  }
}
