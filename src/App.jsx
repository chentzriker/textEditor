import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import StyleText from "./components/StyleText";
import Board from "./components/Board";
import Specials from "./components/Specials";

function App() {
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

      setArrText((prev) => prev.slice(0,-1))
    } else if (e.target.textContent === "space") {
      
      setArrText((prev)=>[...prev,{ letter: " ", style: { color: color, fontSize: fontsize, fontFamily: fontfamily }, }]);
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
  return (
    <>
<<<<<<< HEAD
      <Board />
=======
      <ShowTypedWords arrText={arrText} />
>>>>>>> f219c0446922f7bc02cab9bd7403b59c016c6904
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
