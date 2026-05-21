// src/applications/system/desktop-environment/components/StartMenu.tsx

import Divider from "../divider/Divider";
import PowerPanel from "./PowerPanel";
import StartMenuLeftPanel from "./StartMenuLeftPanel";
import StartMenuRightPanel from "./StartMenuRightPanel";
import { forwardRef } from "react";
import { useTheme } from "../../themes/ThemeContext";

interface StartMenuProps {
  isOpen: boolean;
}

const StartMenu = forwardRef<HTMLDivElement, StartMenuProps>(
  ({ isOpen }, ref) => {
    // 'ref' is the second argument provided by forwardRef
    const theme = useTheme();
    const startMenuTheme = theme.startmenustyles;

    const startMenuWrapperClasses = [
      startMenuTheme.wrapper.border,
      startMenuTheme.wrapper.color,
      startMenuTheme.wrapper.display,
    ]
      .filter(Boolean)
      .join(" ");

    const startMenuHeaderClasses = [
      startMenuTheme.startMenuHeader.border,
      startMenuTheme.startMenuHeader.color,
      startMenuTheme.startMenuHeader.display,
    ]
      .filter(Boolean)
      .join(" ");

    const innerMenuClasses = [
      startMenuTheme.innermenu.border,
      startMenuTheme.innermenu.display,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={`${isOpen ? "absolute" : "hidden"} ${startMenuWrapperClasses}`}
        ref={ref}
      >
        <div className={startMenuHeaderClasses}>
          <img
            src={theme.startmenustyles.profilepicture.iconSrc}
            className={theme.startmenustyles.profilepicture.iconStyle}
            alt={theme.startmenustyles.profilepicture.iconAlt}
          />
          <span className={theme.startmenustyles.username.text}>
            Administrator
          </span>
        </div>

        <div className={innerMenuClasses}>
          <Divider dividerColor="orange" />
          <div className={theme.startmenustyles.pannelwrapper.display}>
            <StartMenuLeftPanel />
            <StartMenuRightPanel />
          </div>
          <PowerPanel />
        </div>
      </div>
    );
  },
);

export default StartMenu;
