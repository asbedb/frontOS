interface StartMenuButtonProps {
  iconPath: string;
  appName: string;
  appSubtitle?: string;
  bold?: boolean;
  rightMenuButton?: boolean;
}

function StartMenuButton({
  iconPath,
  appName,
  appSubtitle,
  bold,
  rightMenuButton,
}: StartMenuButtonProps) {
  return (
    <button
      className={` hover:cursor-pointer hover:bg-black/10 ${
        rightMenuButton
          ? "p-2 focus:bg-[#d8fcfc]"
          : "min-h-4 p-4 focus:bg-[#c6eafb]"
        }`}
    >
      <div className="flex flex-row items-center gap-4">
        <img
          src={iconPath}
          className={`flex ${rightMenuButton ? "h-[35px]" : "h-[50px]"}`}
        />
        <div
          className={`flex flex-col text-left ${rightMenuButton ? "text-blue-900" : ""}`}
        >
          <a
            className={`${bold ? "font-semibold" : ""} ${rightMenuButton ? "text-sm" : ""}`}
          >
            {appName}
          </a>
          <a className="text-sm font-light">{appSubtitle}</a>
        </div>
      </div>
    </button>
  );
}

export default StartMenuButton;
