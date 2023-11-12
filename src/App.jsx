import React, { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import StyleText from "./components/StyleText";
import Specials from "./components/Specials";

function App() {
  const lowercaseLetters = [];

  for (let i = 97; i <= 122; i++) {
    lowercaseLetters.push(String.fromCharCode(i));
  }

  let color = "black";
  let fontsize = "20";
  let fontfamily = "Arial";

  const [text1, setText1] = useState("");
  const [arrText, setArrText] = useState([]);

  function handlePressLetter(e) {
    if (e.target.textContent === "space") {
      setArrText(
        arrText.push({
          letter: " ",
          style: { color: color, fontSize: fontsize, fontFamily: fontfamily },
        })
      );
      //setText1(text1 + " ");
    } else if (e.target.textContent === "delete") {
      // setText1(text1.slice(0, -1));
      setText1(arrText[arrText.length - 1].pop);
    } else {
      // setText1(text1 + e.target.textContent);
      setArrText(
        arrText.push({
          letter: e.target.textContent,
          style: { color: color, fontSize: fontsize, fontFamily: fontfamily },
        })
      );
    }
  }

  function Clear() {
    setArrText(() => {
      for (let i = 0; i < arrText.length; i++) {
        arrText.pop;
      }
    });
  }
  function LowerCase() {
    setArrText(() => {
      for (let key of arrText) {
        key.letter.toLowerCase();
      }
    });
  }
  function UpperCase() {
    setArrText(() => {
      for (let key of arrText) {
        key.letter.toUpperCase();
      }
    });
  }
  return (
    <>
      <div>
        <p>{text1}</p>
      </div>
      <Keyboard
        letters={lowercaseLetters}
        handlePressLetter={handlePressLetter}
      />
      <StyleText />
      <Specials Clear={Clear} LowerCase={LowerCase} UpperCase={UpperCase} />
    </>
  );
}

export default App;
