// src/applications/system/desktop-environment/components/startbutton/StartButton.tsx

import StartMenu from "../startmenu/StartMenu";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../themes/ThemeContext";

function StartButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = useTheme();
  const startButtonTheme = theme.startbutton;

  const startButtonWrapperClasses = [
    startButtonTheme.startButtonWrapper.display,
  ]
    .filter(Boolean)
    .join(" ");

  const startButtonStyling = [
    startButtonTheme.startButton.align,
    startButtonTheme.startButton.border,
    startButtonTheme.startButton.color,
    startButtonTheme.startButton.display,
    startButtonTheme.startButton.focus,
    startButtonTheme.startButton.hover,
  ]
    .filter(Boolean)
    .join(" ");

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleStartClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={startButtonWrapperClasses}>
      <StartMenu isOpen={isOpen} ref={menuRef} />
      <button
        ref={buttonRef}
        className={startButtonStyling}
        onClick={() => {
          handleStartClick();
        }}
      >
        <img
          src={startButtonTheme.startButtonIcon.iconSrc}
          className={startButtonTheme.startButtonIcon.iconStyle}
        />
        <span className={startButtonTheme.startButton.text}>start</span>
      </button>
    </div>
  );
}

export default StartButton;
