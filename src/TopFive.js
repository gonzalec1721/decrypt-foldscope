import React from "react";

export default function TopFive({ topFive }) {
  return (
    <div class="pt-5 grid grid-cols-3 gap-4 justify-items-center">
      {topFive.map((el, index) => {
        return (
          <p
            class="bg-white shadow-2xl pt-2 pb-2 pl-4 pr-4 border-double rounded-lg border-8 border-blue-800 border-opacity-100"
            key={index}
          >
            {el}
          </p>
        );
      })}
    </div>
  );
}
