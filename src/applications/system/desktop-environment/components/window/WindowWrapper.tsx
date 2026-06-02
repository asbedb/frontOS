import { useTheme } from "../../themes/ThemeContext";
import type { ReactNode, RefCallback } from "react";

interface WindowWrapperProps {
  children?: ReactNode;
  dragRef?: RefCallback<HTMLDivElement>;
  id?: string;
}

function WindowWrapper({ children, dragRef, id = "drag" }: WindowWrapperProps) {
  const theme = useTheme();
  const windowTheme = theme.windowstyles;

  const windowWrapperClass = [
    windowTheme.wrapper.color,
    windowTheme.wrapper.display,
    windowTheme.wrapper.zIndex,
    windowTheme.wrapper.border,
    windowTheme.wrapper.hover,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div id={id} className={windowWrapperClass} ref={dragRef}>
      {children}
    </div>
  );
}

export default WindowWrapper;
