function Board(props) {
  return (
    <div>
      {props.arrText.map((element, index) => (
        <span key={index} style={element.style}>
          {element.letter}
        </span>
      ))}
    </div>
  );
}
export default Board;
