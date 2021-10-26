import React, { useState } from "react";
import "./index.css";
import DisplayCount from "./DisplayCount";

export default function InputPhrase() {
  const [secretWord, setSecretWord] = useState("");
  const [wordCount, setWordCount] = useState();

  const handleChange = (e) => {
    setSecretWord(e.target.value);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    let output = {};
    let newSecret = secretWord.replace(/\s+/g, "");
    for (var i = 0; i < newSecret.length; i++) {
      if (output[newSecret[i].toLowerCase()] === undefined) {
        output[newSecret[i].toLowerCase()] = 1;
      } else {
        output[newSecret[i].toLowerCase()]++;
      }
    }
    setWordCount(output);
    setSecretWord("");
  };
  return (
    <div>
      <h1 class="font-Lobster justify-items-center mb-8 mt-8 text-6xl">
        Decrypter
      </h1>
      <button
        class="font-Lato bg-red-300 hover:bg-red-400 justify-items-center pl-2 pr-2 mb-8 rounded-lg border-4 border-red-500 border-opacity-100"
        onClick={() => window.location.reload(false)}
      >
        Click to reload!
      </button>
      <div class=" grid justify-items-center">
        <form>
          <label class="font-Lato text-2xl">
            Secret Phrase:
            <input
              class=" ml-2 rounded-lg border-4 border-blue-500 border-opacity-100"
              onChange={handleChange}
              value={secretWord}
              type="text"
            ></input>
            <button
              class="font-Lato bg-red-300 hover:bg-red-400 pl-2 pr-2 ml-2 rounded-lg border-4 border-red-500 border-opacity-100"
              onClick={handleSumbit}
            >
              Sumbit
            </button>
          </label>
        </form>
      </div>
      <DisplayCount word={wordCount} />
    </div>
  );
}
