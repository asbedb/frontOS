// src/applications/system/desktop-environment/components/systemtrayexpandbutton/SystemTrayExpandButton.tsx

import { useTheme } from "../../themes/ThemeContext";

function SystemTrayExpandButton() {
  const theme = useTheme();
  const systemTrayTheme = theme.systemtray;
  const systemTrayExpandButtonClass = [
    systemTrayTheme.systemTrayExpandButton.align,
    systemTrayTheme.systemTrayExpandButton.border,
    systemTrayTheme.systemTrayExpandButton.color,
    systemTrayTheme.systemTrayExpandButton.display,
    systemTrayTheme.systemTrayExpandButton.focus,
    systemTrayTheme.systemTrayExpandButton.hover,
    systemTrayTheme.systemTrayExpandButton.text,
  ]
    .filter(Boolean)
    .join(" ");
  return <button className={systemTrayExpandButtonClass}>{`<`}</button>;
}

export default SystemTrayExpandButton;
