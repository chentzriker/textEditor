import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Keyboard from "./components/Keyboard";

function App() {
  const lowercaseLetters = [];

  for (let i = 97; i <= 122; i++) {
    lowercaseLetters.push(String.fromCharCode(i));
  }

  const [text1, setText1] = useState("");

  function handlePressLetter(e) {
    if (e.target.textContent === "space") {
      setText1(text1 + " ");
    } else if (e.target.textContent === "delete") {
      setText1(text1.slice(0, -1));
    } else {
      setText1(text1 + e.target.textContent);
    }
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
    </>
  );
}

export default App;
