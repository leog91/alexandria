import React, { useState } from "react";
import internal from "stream";

type Wearable = { name: String; size: { x: number; y: number }; color: String };

const createTshirt = (
  name: string = "shirt1",
  x: number = 3,
  y: number = 1,
  color: string = "black"
): Wearable => {
  return { name: name, size: { x: x, y: y }, color: color };
};

const bootstrap = () => {
  return [createTshirt("first"), createTshirt("second"), createTshirt("third")];
};

const shelf = { size: { x: 9, y: 5 } };

function Room() {
  const [wearableInfo, setWearableInfo] = useState<String | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {wearableInfo ? (
        <div className="w-32 h-20 absolute  inset-1/2 bg-violet-500">
          {wearableInfo}
        </div>
      ) : null}
      Room shelf
      <div className="flex">
        <div className="bg-gray-500 h-20 w-32 flex  items-center p-1 flex-col-reverse">
          <div
            className="w-28 h-2 bg-red-500"
            onMouseEnter={() => setWearableInfo("first and red")}
            onMouseLeave={() => setWearableInfo(null)}
          ></div>
          <div className="w-28 h-2 bg-yellow-500"></div>
          <div className="w-28 h-2 bg-blue-500"></div>
        </div>
        <div className="bg-gray-500 h-20 w-32"></div>
        <div className="bg-gray-500 h-20 w-32 flex  items-center p-1 flex-col-reverse">
          <div className="w-28 h-2 bg-yellow-500"></div>
          <div className="w-28 h-2 bg-red-500"></div>

          <div className="w-28 h-2 bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Room;
