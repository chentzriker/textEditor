function Keyboard(props) {
  const keyboard = props.letters.map((letter, index) => (
    <button id={index} key={index} onClick={(e) => props.handlePressLetter(e)}>
      {letter}
    </button>
  ));
  const essentials = [",", "/", ".", "?", "!"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const otherBtns = essentials.map((char, index) => (
    <button id={index} key={index} onClick={(e) => props.handlePressLetter(e)}>
      {char}
    </button>
  ));
  const numberButtons = numbers.map((char, index) => (
    <button id={index} key={index} onClick={(e) => props.handlePressLetter(e)}>
      {char}
    </button>
  ));
  return (
    <div className="container-keyboard">
      {numberButtons} <br /> {keyboard} <br /> {otherBtns} <br />
      <button onClick={(e) => props.changeLanguage(e)}>caps</button>
      <button onClick={(e) => props.handlePressLetter(e)}>enter</button>
      <button onClick={(e) => props.handlePressLetter(e)}>space</button>
      <button onClick={(e) => props.handlePressLetter(e)}>delete</button>
    </div>
  );
}

export default Keyboard;
