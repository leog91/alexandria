"use client";

import { useState } from "react";

type product = {
  name: string;
  where: {
    url: string;
    price: number;
  }[];
};

const products = [
  {
    name: "powerbank",
    where: [
      { url: "url1", price: 133 },
      { url: "url2", price: 433 },
    ],
  },
  {
    name: "ssd",
    where: [
      { url: "url1", price: 233 },
      { url: "url2", price: 633 },
    ],
  },
];

// onLoadTrackPrice

function Page() {
  const [selected, setSelected] = useState<product | null>(null);

  return (
    <div className="bg-stone-800 min-h-screen flex  flex-col items-center text-white">
      <h1>TRACK</h1>

      <main className="w-full max-w-sm">
        {products.map((p) => (
          <div
            className="flex justify-between  items-center hover:cursor-pointer bg-black m-2 p-2 border-2 border-black hover:border-stone-300"
            key={p.name}
            onClick={() => setSelected(p)}
          >
            <div> {p.name} </div>

            <div>
              {p.where.map((w) => (
                <div key={w.price}>
                  {" "}
                  {w.url} - {w.price}
                </div>
              ))}
            </div>
            <button className=" h-6 px-2 hover:bg-stone-500">scan</button>
          </div>
        ))}

        {selected ? (
          <div className="relative border-stone-400 border-2 p-2 rounded-md">
            <button
              onClick={() => setSelected(null)}
              className="bg-red-500 text-sm font-light absolute hover:font-semibold right-2 h-4 rounded-sm w-4 justify-center flex  items-center"
            >
              X
            </button>
            <h2>selected</h2>
            {selected?.name}
            <div className="flex justify-between ">
              <div>current {selected.where[0].price}</div>
              <div>lowest 34 - 2022/04/19</div>
            </div>

            <div className="flex  mt-4 flex-col items-center  ">
              <h3>history</h3>
              <canvas className="  w-full  bg-yellow-400"></canvas>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default Page;
