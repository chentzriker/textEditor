import React, { useState } from "react";

function Keyboard(props) {
  const keyboard = props.letters.map((letter, index) => (
    <button id={index} key={index} onClick={(e) => props.handlePressLetter(e)}>
      {letter}
    </button>
  ));

  const essentials = [",", "/", ".", "?", "!"];

  const otherBtns = essentials.map((char, index) => (
    <button id={index} key={index} onClick={(e) => props.handlePressLetter(e)}>
      {char}
    </button>
  ));
  return (
    <div className="container-keyboard">
      {keyboard} <br /> {otherBtns}
      <button onClick={(e) => props.handlePressLetter(e)}>space</button>
      <button onClick={(e) => props.handlePressLetter(e)}>delete</button>
    </div>
  );
}

export default Keyboard;
