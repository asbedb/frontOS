// src/applications/system/desktop-environment/components/tasbarkapplication/TasbarApplicationWrapper.tsx

import type { ReactNodeProps } from "../types/types";
import { useTheme } from "../../themes/ThemeContext";

function TaskbarApplicationWrapper({ children, link }: ReactNodeProps) {
  const theme = useTheme();
  const taskbarTheme = theme.taskbar;

  const applicationBarWrapperClasses = [
    taskbarTheme.applicationBarWrapper.display,
  ]
    .filter(Boolean)
    .join(" ");

  const applicationClasses = [
    taskbarTheme.application.active,
    taskbarTheme.application.align,
    taskbarTheme.application.border,
    taskbarTheme.application.display,
    taskbarTheme.application.focus,
    taskbarTheme.application.hover,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={applicationBarWrapperClasses} >
      <a 
        href={link ? link : "#"} 
        target={link ? "_blank" : undefined}
        className={applicationClasses}>
          {children}
      </a>
    </div>
  );
}

export default TaskbarApplicationWrapper;
