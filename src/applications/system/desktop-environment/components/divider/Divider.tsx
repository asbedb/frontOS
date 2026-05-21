// src/applications/system/desktop-environment/components/duvuder/Divider.tsx

import { useTheme } from "../../themes/ThemeContext";
type DividerColor = "orange" | "black";

interface DividerProps {
  dividerColor: DividerColor;
}

function Divider({ dividerColor }: DividerProps) {
  const theme = useTheme();
  const dividerTheme = theme.dividerstyles;

  const activeDividerColor = [
    dividerTheme[dividerColor].color,
    dividerTheme[dividerColor].display,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={activeDividerColor}></div>;
}

export default Divider;
