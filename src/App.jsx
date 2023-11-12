import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import StyleText from "./components/StyleText";
import Board from "./components/Board";
import Special from "./components/Specials";

export function App() {
  const lowercaseLetters = [];

  for (let i = 97; i <= 122; i++) {
    lowercaseLetters.push(String.fromCharCode(i));
  }

  let color = "black";
  let fontsize = "20";
  let fontfamily = "Arial";

  // const [text1, setText1] = useState("");
  const [arrText, setArrText] = useState([]);

  function handlePressLetter(e) {
    if (e.target.textContent === "delete") {
      setArrText((prev) => prev.slice(0, -1));
    } else if (e.target.textContent === "space") {
      setArrText((prev) => [
        ...prev,
        {
          letter: " ",
          style: { color: color, fontSize: fontsize, fontFamily: fontfamily },
        },
      ]);
    } else {
      setArrText((prev) => [
        ...prev,
        {
          letter: e.target.textContent,
          style: { color: color, fontSize: fontsize, fontFamily: fontfamily },
        },
      ]);
    }
    console.log(arrText);
  }

  function Clear() {
    console.log("hi");
    setArrText([]);
  }

  function LowerCase() {
    // setArrText((prev) => {
    //   prev.map((key, index) => {
    //     key.letter.toLowerCase();
    //   });
    // });
    const clone = [...arrText];
    let newArray = [];
    for (let key of clone) {
      const Letter = key.letter?.toLowerCase();
      newArray.push({
        letter: Letter,
        style: key.style,
      });
    }
    setArrText(newArray);
  }
  function UpperCase() {
    const clone = [...arrText];
    let newArray = [];
    for (let key of clone) {
      const Letter = key.letter.toUpperCase();
      newArray.push({ letter: Letter, style: key.style });
    }
    setArrText(newArray);
  }
  return (
    <>
      <Board arrText={arrText} />
      <Keyboard
        letters={lowercaseLetters}
        handlePressLetter={handlePressLetter}
      />
      <StyleText />
      <Special Clear={Clear} LowerCase={LowerCase} UpperCase={UpperCase} />
    </>
  );
}
