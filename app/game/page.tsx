"use client";

import React, { useEffect, useRef } from "react";

function Page() {
  const size = { width: 400, height: 250 };
  const canvasRef = useRef(null);

  const renderFrame = () => {
    // ...
  };

  const tick = () => {
    if (!canvasRef.current) return;
    renderFrame();
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    requestAnimationFrame(tick);
  }, []);

  return (
    <div className="bg-stone-800 min-h-screen flex flex-col items-center text-white">
      <div>GAME</div>
      <div></div>
      <canvas className="bg-green-500" {...size} ref={canvasRef} />
    </div>
  );
}

export default Page;
