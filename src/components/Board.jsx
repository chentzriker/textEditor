function Board(props) {
  return (
    <div className="displayedText">
      {props.arrText
        ? props.arrText.map((element, index) => (element.letter === "/n" ? <br key={index}/> :
            <span key={index} style={element.style}>
              {element?.letter}
            </span>
          ))
        : null}
    </div>
  );
}
export default Board;
