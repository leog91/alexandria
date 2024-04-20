import { useState } from "react";
import Directory from "../components/Directory";

export default function Desktop() {
  //TO-DO =>folderParam,options
  const [folderStatus, setFolderStatus] = useState(false);

  const taskBarDivider = (
    <div className=" border-2  mx-1 bg-stone-200 h-5  border-stone-600 shadow-black shadow-sm w-1.5"></div>
  );

  const taskBarApplication = (iconAndName: string, selected = false) => (
    <div
      className={`border-2 p-0.5 mx-0.5  w-40 ${
        selected ? "bg-stone-50 font-bold border-black" : "border-stone-500"
      } `}
    >
      {iconAndName}
    </div>
  );

  const desktopApp = (name: string, icon: string) => (
    <div
      className="w-16 hover:cursor-pointer h-20 flex flex-col items-center"
      onClick={() => {
        if (name === "Games") {
          setFolderStatus(true);
        } else {
          alert("not yet 🥵");
        }
      }}
    >
      <div className="text-3xl">{icon}</div>
      <div className="bg-blue-800 text-center text-white text-sm -py-0.5 font-thin ">
        {name}
      </div>
    </div>
  );

  return (
    <div className="flex relative overflow-hidden select-none flex-col justify-between bg-gray-500 min-h-screen items-center  ">
      <div
        // style={{
        //   height: "calc(100vh - 28px)",
        //   backgroundImage: "url(https://wallpapercave.com/wp/wp2808032.jpg)",
        // }}
        className="  flex w-full   flex-col flex-wrap gap-3     "
      >
        {desktopApp("My Computer", "🖥️")}
        {desktopApp("Recycle Bin", "🗑️")}
        {desktopApp("CD-Drive", "💽")}
        {desktopApp("3½ Floppy", "💾")}
        {desktopApp("Games", "📁")}
        <div className="w-16 hover:cursor-pointer h-20 flex flex-col items-center">
          <picture>
            <img src="/win95-icons/tree-0.png" className="w-10" alt="icon" />
          </picture>
          <div className="bg-blue-800 text-center text-white text-sm -py-0.5 font-thin ">
            Apps
          </div>
        </div>
        <picture>
          <img
            className="absolute left-1/2 top-1/3"
            src="/win95-icons/computer_explorer-2.png"
            alt="icon"
          />
        </picture>
        {folderStatus ? (
          <div className="flex  flex-col  items-center">
            <div className="  absolute shadow-black/70 shadow-md top-1/4">
              <Directory closeWindow={setFolderStatus} />
            </div>
          </div>
        ) : null}
      </div>
      <div className=" flex p-0.5  text-xs bg-stone-300 w-full items-center">
        <div className=" border-2  px-1 text-sm font-bold  border-stone-600 shadow-black shadow-sm">
          Start
        </div>
        <div>✉️</div>
        <div>📁</div>
        <div className="px-1 -translate-y-1 font-bold ">»</div>
        {taskBarDivider}
        {taskBarApplication("🖥️ My Computer")}
        {taskBarApplication("📁 File Explorer", true)}
        {taskBarApplication("🗓️ Calendar")}
        <div className="ml-auto  flex border-stone-500 border-2 p-0.5">
          <div>📶</div>
          <div>🖱️</div>
          <div>⚠️</div>
          <div>🔊</div>
          <div className="px-1">{`${new Date().getHours()}:${new Date().getMinutes()}`}</div>
        </div>
      </div>
    </div>
  );
}
