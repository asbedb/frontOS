import Divider from "../divider/Divider";
import StartMenuButton from "./StartMenuButton";

function StartMenuRightPanel() {
  return (
    <div className="flex-1 flex flex-col text-black">
      <StartMenuButton
        iconPath="img/ico/my_documents.png"
        appName="My Documents"
        rightMenuButton={true}
        bold={true}
      />
      <StartMenuButton
        iconPath="img/ico/my_pictures.png"
        appName="My Pictures"
        rightMenuButton={true}
        bold={true}
      />
      <StartMenuButton
        iconPath="img/ico/my_music.png"
        appName="My Music"
        rightMenuButton={true}
        bold={true}
      />
      <StartMenuButton
        iconPath="img/ico/my_videos.png"
        appName="My Videos"
        rightMenuButton={true}
        bold={true}
      />
      <StartMenuButton
        iconPath="img/ico/my_computer.png"
        appName="My Computer"
        rightMenuButton={true}
        bold={true}
      />
      <Divider dividerColor="black" />
      <StartMenuButton
        iconPath="img/ico/mspaint.png"
        appName="Microsoft Paint"
        rightMenuButton={true}
        bold={true}
      />
      <StartMenuButton
        iconPath="img/ico/games.png"
        appName="Games"
        rightMenuButton={true}
        bold={true}
      />
      <Divider dividerColor="black" />
      <StartMenuButton
        iconPath="img/ico/about.png"
        appName="About"
        rightMenuButton={true}
        bold={true}
      />
      <StartMenuButton
        iconPath="img/ico/search.png"
        appName="Search"
        rightMenuButton={true}
        bold={true}
      />
      <StartMenuButton
        iconPath="img/ico/run.png"
        appName="Run"
        rightMenuButton={true}
        bold={true}
      />
    </div>
  );
}

export default StartMenuRightPanel;
