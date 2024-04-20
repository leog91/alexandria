import React, { Dispatch, SetStateAction } from "react";

function Directory({
  closeWindow,
}: {
  closeWindow?: Dispatch<SetStateAction<boolean>>;
}) {
  const sideMenu = [
    {
      title: "File and Folder Task",
      open: true,
      items: [
        "📂 Make a new folder",
        "🌐 Publish this folder to the Web",
        "📂 Share this folder",
      ],
    },
    {
      title: "Other Places",
      open: true,
      items: [
        "🗔 Desktop",
        "My Documents",
        "📂 Shared Documents",
        "🖥️ My computer",
        "🌎 My Network Places",
      ],
    },
    {
      title: "Details",
      open: false,
      items: [],
    },
  ];

  return (
    <div className="bg-neutral-200 flex flex-col text-sm">
      <div className="bg-sky-900 flex justify-between items-center text-white font-bold">
        <div>📂Games</div>
        <button
          className="m-1 text-center rounded-sm align-middle bg-red-500 h-4 w-4"
          onClick={() => {
            if (closeWindow) {
              closeWindow(false);
            }
          }}
        >
          X
        </button>
      </div>
      <div className="flex  space-x-1 ">
        <div>File</div>
        <div>Edit</div>
        <div>View</div>
        <div>Favorites</div>
        <div>Tools</div>
        <div>Help</div>
      </div>
      <div className="text-lg">🔙🔜🔝🔎🗂️🪟Nav Buttons</div>
      <div>address bar➡️Go</div>
      <div className="flex">
        <div className="bg-sky-700 ">
          {sideMenu.map((m) => (
            <div key={m.title} className="m-3">
              <div className="flex justify-between bg-sky-900 text-sky-200 items-center ">
                <div className=" w-full">{m.title}</div>
                <div
                  className={` ${
                    m.open ? "-rotate-90" : "rotate-90"
                  }     pb-1 flex items-center justify-center h-4 w-4 cursor-pointer`}
                >
                  »
                </div>
              </div>
              {m.open ? (
                <div className=" bg-gray-100 p-2 flex flex-col">
                  {m.items.map((i) => (
                    <div key={i}>{i}</div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="bg-white w-full">
          <div className=" flex flex-wrap   h-fit ">
            <div className="flex  m-2   hover:cursor-pointer  bg-red-400">
              <picture>
                <img
                  src="/win95-icons/tree-0.png"
                  className="w-12"
                  alt="icon"
                />
              </picture>
              <div className="text-xs m-1 h-12 ml-1.5 ">
                <div>Warcraft III</div>
                <div className="text-neutral-500">Shortcut</div>
                <div className="text-neutral-500">1 Kb</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>StartMenu</div>
    </div>
  );
}

export default Directory;
