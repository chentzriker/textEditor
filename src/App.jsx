import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import StyleText from "./components/StyleText";
import Board from "./components/Board";
import Specials from "./components/Specials";

function App() {
  const lowercaseLetters = [];
  const [arrText, setArrText] = useState([]);
  const [color, setColor] = useState("black")
  const [fontsize, setFontSize] = useState("20px")
  const [fontfamily, setFontFamily] = useState("Ariel")

  for (let i = 97; i <= 122; i++) {
    lowercaseLetters.push(String.fromCharCode(i));
  }

  function handlePressLetter(e) {
    if (e.target.textContent === "delete") {

      setArrText((prev) => prev.slice(0, -1))
    } else if (e.target.textContent === "space") {

      setArrText((prev) => [...prev, { letter: " ", style: { color: color, fontSize: fontsize, fontFamily: fontfamily }, }]);
    } else {
      setArrText((prev) => [...prev, { letter: e.target.textContent, style: { color: color, fontSize: fontsize, fontFamily: fontfamily }, }])
    }
    console.log(arrText)
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
  function changeColor(e) {
    setColor(e.target.textContent)
  }

  function changeSize(e) {
    setFontSize(e.target.textContent + "px")
  }

  function changeFontFamily(e) {
    setFontFamily(e.target.textContent)
  }

  return (
    <main>
      <div>
        <Board arrText={arrText} />
        <Keyboard
          letters={lowercaseLetters}
          handlePressLetter={handlePressLetter}
        />
      </div>
      <div className="fitures">
        <StyleText changeColor={changeColor} changeSize={changeSize} changeFontFamily={changeFontFamily} />
        <Specials Clear={Clear} LowerCase={LowerCase} UpperCase={UpperCase} />
      </div>
    </main>
  );
}

export default App;
