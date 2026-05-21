// src/applications/system/desktop-environment/components/systemtray/SystemTray.tsx

import SystemTrayExpandButton from "../systemtrayexpandbutton/SystemTrayExpandButton";
import TimeComponent from "../time/TimeComponent";
import { useTheme } from "../../themes/ThemeContext";

function SystemTray() {
  const theme = useTheme();
  const systemTrayTheme = theme.systemtray;

  const systemTrayWrapperClass = [
    systemTrayTheme.systemTrayWrapper.align,
    systemTrayTheme.systemTrayWrapper.display,
    systemTrayTheme.systemTrayWrapper.text,
  ]
    .filter(Boolean)
    .join(" ");
  const systemTrayClass = [
    systemTrayTheme.systemTray.align,
    systemTrayTheme.systemTray.color,
    systemTrayTheme.systemTray.display,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={systemTrayWrapperClass}>
      <div className={systemTrayClass}>
        <SystemTrayExpandButton />
        <img
          src={theme.systemtray.volIcon.iconSrc}
          className={theme.systemtray.volIcon.iconStyle}
        />
        {/* Date/Time Block */}
        <TimeComponent />
      </div>
    </div>
  );
}

export default SystemTray;
