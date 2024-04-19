import React from "react";
import Directory from "../components/Directory";

function Dir() {
  return (
    <div className="bg-blue-800 min-h-screen  flex flex-col items-center">
      Dir
      <div className="max-w-3xl w-full ">
        <Directory />
      </div>
    </div>
  );
}

export default Dir;
