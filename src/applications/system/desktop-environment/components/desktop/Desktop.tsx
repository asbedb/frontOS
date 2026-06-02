import { useTheme } from "../../themes/ThemeContext";
import WindowWrapper from "../window/WindowWrapper";

function Desktop() {
  const theme = useTheme();
  const desktopTheme = theme.desktopstyles;

  const desktopWrapperClass = [
    desktopTheme.wrapper.color,
    desktopTheme.wrapper.display,
    desktopTheme.wrapper.zIndex,
  ]
    .filter(Boolean)
    .join(" ");

  function dragElement(el: HTMLDivElement) {
    let offsetX = 0,
      offsetY = 0;
    function onMouseDown(e: MouseEvent) {
      e.preventDefault();
      offsetX = e.clientX - el.getBoundingClientRect().left;
      offsetY = e.clientY - el.getBoundingClientRect().top;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
    function onMouseMove(e: MouseEvent) {
      el.style.position = "absolute";
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    }
    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
    el.addEventListener("mousedown", onMouseDown);
    return () => el.removeEventListener("mousedown", onMouseDown);
  }

  return (
    <div className={desktopWrapperClass}>
      <WindowWrapper dragRef={dragElement}>
        I started this project some time ago and I am going backwards fixing
        things up! Find the latest updates on GitHub :D
      </WindowWrapper>
    </div>
  );
}
export default Desktop;
