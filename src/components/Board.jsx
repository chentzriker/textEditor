function Board(props) {
  return (
    <div>
      {props.arrText
        ? props.arrText.map((element, index) => (
            <span key={index} style={element.style}>
              {element?.letter}
            </span>
          ))
        : null}
    </div>
  );
}
export default Board;
