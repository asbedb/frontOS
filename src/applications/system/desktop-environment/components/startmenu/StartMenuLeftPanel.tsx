import Divider from "../divider/Divider";
import StartMenuButton from "./StartMenuButton";

function StartMenuLeftPanel() {
  return (
    <div className="flex-1 flex flex-col bg-white text-black border-r-1 border-black/40">
      <StartMenuButton
        iconPath="img/ico/internet.png"
        appName="Internet"
        appSubtitle="Internet Explorer"
      />
      <StartMenuButton
        iconPath="img/ico/outlook_express.png"
        appName="Email"
        appSubtitle="Outlook Express"
      />
      <Divider dividerColor="black" />
      <StartMenuButton iconPath="img/ico/msn.png" appName="MSN" />
      <StartMenuButton
        iconPath="img/ico/messenger.png"
        appName="Windows Mesenger"
      />
      <StartMenuButton
        iconPath="img/ico/mediaplayer.png"
        appName="Windows Media Player"
      />
    </div>
  );
}

export default StartMenuLeftPanel;
