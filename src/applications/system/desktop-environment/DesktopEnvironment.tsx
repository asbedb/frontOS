import { useState, useEffect } from "react";
import { loadTheme } from "./themes/ThemeLoader";
import { ThemeContext } from "./themes/ThemeContext";
import type { FullTheme } from "./themes/types";
import TaskBar from "./components/taskbar/TaskBar";
import { getActiveThemeName } from "../settings/DisplaySettings";

function DesktopEnvironment() {
  const [currentTheme, setCurrentTheme] = useState<FullTheme | null>(null);
  const [loadingTheme, setLoadingTheme] = useState<boolean>(true);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const loadedTheme = await loadTheme(getActiveThemeName());
        setCurrentTheme(loadedTheme);
      } catch (error) {
        console.error(
          "DesktopEnvironment: Error loading theme in fetchTheme:",
          error,
        );
        setCurrentTheme(null);
      } finally {
        setLoadingTheme(false);
      }
    };
    fetchTheme();
  }, []);

  if (loadingTheme) {
    return <div>Loading Desktop Environment</div>;
  }

  if (!currentTheme) {
    return <div> Error: Could not load any theme.</div>;
  }

  return (
    <ThemeContext.Provider value={currentTheme}>
      <div className="flex h-screen w-screen flex-col overflow-hidden bg-black text-white">
        <div
          className="bg-blue-800 flex h-[95svh] w-full"
          id="xp-desktop"
        ></div>
        <TaskBar />
      </div>
    </ThemeContext.Provider>
  );
}

export default DesktopEnvironment;
