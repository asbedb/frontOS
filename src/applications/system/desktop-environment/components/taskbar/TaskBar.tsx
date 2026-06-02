// src/applications/system/desktop-environment/components/taskbar/TaskBar.tsx

import StartButton from "../startbutton/StartButton";
import SystemTray from "../systemtray/SystemTray";
import TaskbarApplicationWrapper from "../taskbarapplication/TaskbarApplicationWrapper";
import { useTheme } from "../../themes/ThemeContext";

function TaskBar() {
  const theme = useTheme();
  const taskbarTheme = theme.taskbar;

  const taskbarWrapperClasses = [
    taskbarTheme.wrapper.display,
    taskbarTheme.wrapper.color,
    taskbarTheme.wrapper.zIndex,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={taskbarWrapperClasses}>
      <StartButton />
      <TaskbarApplicationWrapper link="https://asbedb.dev/">
        👋 asbedb.dev
      </TaskbarApplicationWrapper>
      <SystemTray />
    </div>
  );
}

export default TaskBar;
