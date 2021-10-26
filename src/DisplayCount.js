import React, { useState } from "react";
import TopFive from "./TopFive";

export default function DisplayCount({ word }) {
  const [topFive, setTopFive] = useState();

  const handleFive = () => {
    let finalArr = [];
    let numArr = [];
    let final = {};
    for (let key in word) {
      numArr.push(word[key]);
    }
    const result = numArr.sort((a, b) => b - a).slice(0, 5);
    for (let key in word) {
      for (let i = 0; i < result.length; i++) {
        if (result[i] === word[key]) {
          final[key] = word[key];
        }
      }
    }
    for (let key in final) {
      finalArr.push(`Letter: ${key} \u00A0\u00A0 Count: ${final[key]}`);
    }
    setTopFive(finalArr);
  };

  const handleSet = () => {
    const chars = [];

    for (let key in word) {
      chars.push(
        `Letter : ${key}\u00A0 Count : ${word[key]}\u00A0 \u00A0\u00A0`
      );
    }
    return chars;
  };

  return (
    <div>
      <div class="pt-5 grid grid-cols-3 gap-4 justify-items-center">
        {handleSet().map((el, index) => {
          return (
            <p
              class="pt-2 pb-2 pl-4 border-double rounded-lg border-8 border-red-300 border-opacity-100 "
              key={index}
            >
              {el}
            </p>
          );
        })}
      </div>

      <button
        class="font-Lato bg-red-300 hover:bg-red-400 bg-opacity-75 justify-items-center pl-2 pr-2 mt-8 mb-8 rounded-lg border-4 border-red-500 border-opacity-100"
        onClick={handleFive}
      >
        Top Five Letters
      </button>

      {topFive ? <TopFive topFive={topFive} /> : handleFive()}
    </div>
  );
}
