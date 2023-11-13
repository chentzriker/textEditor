function Special(props) {
  return (
    <div>
      <h3>specials</h3>
      <button onClick={props.Clear}>clearALL</button>
      <button onClick={props.LowerCase}>lowerALL</button>
      <button onClick={props.UpperCase}>upperALL</button>
      <br/>
      <button onClick={(e) => props.changePosition(e)}>left</button>
      <button onClick={(e) => props.changePosition(e)}>center</button>
      <button onClick={(e) => props.changePosition(e)}>right</button>
    </div>
  );
}
export default Special;
